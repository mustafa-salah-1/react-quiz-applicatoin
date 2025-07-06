import "./css/App.css";
import Main from "./Main";
import Header from "./components/Header";
import { useEffect, useReducer } from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  point: 0,
  answer: null,
};

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "start":
        return {
          ...state,
          status: "active",
        };
      case "newAnswer":
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          point:
            action.payload === question.currectOption
              ? state.point + question.points
              : state.point,
        };
      case "next":
        return {
          ...state,
          answer: null,
          index: state.index++,
        };
      case "dataFailed":
        return {
          ...state,
          status: "fetch data Failed",
        };
      case "finish":
        return {
          ...state,
          status: "finished",
        };
      case "restart":
        return {
          ...state,
          index: 0,
          point: 0,
          answer: null,
          status: "ready",
        };
      default:
        throw new Error("Action unkonwn");
    }
  }

  const [{ questions, status, index, answer, point }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  const length = questions.length;
  const maxPoint = questions.reduce((prev, cur) => prev + cur.points, 0);
  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error error={status} />}
        {status === "ready" && (
          <StartScreen questions={length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={length}
              answer={answer}
              maxPoint={maxPoint}
              point={point}
              index={index}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextQuestion
              dispatch={dispatch}
              index={index}
              length={length}
              answer={answer}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen point={point} dispatch={dispatch} maxPoint={maxPoint} />
        )}
      </Main>
    </div>
  );
}

export default App;
