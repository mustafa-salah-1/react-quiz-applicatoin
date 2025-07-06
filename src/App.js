import "./css/App.css";
import Main from "./Main";
import Header from "./components/Header";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
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
        case "dataFailed":
          return {
            ...state,
            status: "error"
          }
      default:
        throw new Error("Action unkonwn");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({type: "dataFailed"}));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <p>This is the main content area.</p>
      </Main>
    </div>
  );
}

export default App;
