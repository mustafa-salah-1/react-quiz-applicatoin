export default function StartScreen({ questions, dispatch }) {
  return (
    <div className="StartScreen">
      <h2>Welcome to the React Quiz Application</h2>
      <p>You can answer {questions} questions.</p>
      <button onClick={() => dispatch({ type: "start" })}>Start Quiz</button>
    </div>
  );
}
