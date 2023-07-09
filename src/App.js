import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],

  // "loading" | "error" | "ready" | "active" | "finished"
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFetchFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:9000/questions");
        const data = await response.json();
        dispatch({
          type: "dataReceived",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "dataFetchFailed",
        });
      }
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  );
}

export default App;
