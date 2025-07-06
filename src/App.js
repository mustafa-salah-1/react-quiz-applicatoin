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
  questions: [
    {
      id: 1,
      question:
        "Which programming language is primarily used for web development and runs in the browser?",
      options: ["Python", "JavaScript", "C++", "Java"],
      currectOption: 1,
      points: 10,
    },
    {
      id: 2,
      question:
        "Which language is known for its use in data science and machine learning?",
      options: ["Ruby", "Python", "PHP", "Swift"],
      currectOption: 1,
      points: 10,
    },
    {
      id: 3,
      question:
        "Which programming language is used for developing Android apps?",
      options: ["Kotlin", "Swift", "C#", "Go"],
      currectOption: 0,
      points: 10,
    },
    {
      id: 4,
      question: "Which language is mainly used for iOS app development?",
      options: ["Java", "Swift", "C", "Perl"],
      currectOption: 1,
      points: 10,
    },
    {
      id: 5,
      question:
        "Which language is commonly used for server-side web development?",
      options: ["HTML", "CSS", "PHP", "TypeScript"],
      currectOption: 2,
      points: 10,
    },
    {
      id: 6,
      question:
        "Which programming language is known for its simplicity and readability?",
      options: ["Python", "Assembly", "C++", "Rust"],
      currectOption: 0,
      points: 10,
    },
    {
      id: 7,
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      currectOption: 1,
      points: 10,
    },
    {
      id: 8,
      question:
        "Which language is best known for its use in statistical computing?",
      options: ["R", "Java", "Scala", "Lua"],
      currectOption: 0,
      points: 10,
    },
    {
      id: 9,
      question: "Which language is used to query databases?",
      options: ["SQL", "C#", "Ruby", "Bash"],
      currectOption: 0,
      points: 10,
    },
    {
      id: 10,
      question:
        "Which programming language is known for its use in embedded systems?",
      options: ["JavaScript", "C", "PHP", "Python"],
      currectOption: 1,
      points: 10,
    },
    {
      id: 11,
      question: "Which language is mainly used for front-end web development?",
      options: ["JavaScript", "Java", "C++", "Go"],
      currectOption: 0,
      points: 10,
    },
  ],
  // status: "loading", you can use with API
  status: "ready",
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
          status: "error",
          error: action.payload,
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

  const [{ questions, status, index, answer, point, error }, dispatch] =
    useReducer(reducer, initialState);

  // you can use with API
  // useEffect(function () {
  //   fetch("http://localhost:8000/questions")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //     .catch((err) => dispatch({ type: "dataFailed", payload: err.message }));
  // }, []);

  const length = questions.length;
  const maxPoint = questions.reduce((prev, cur) => prev + cur.points, 0);
  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error error={error} />}
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
