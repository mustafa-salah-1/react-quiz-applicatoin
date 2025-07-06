
export default function StartScreen({questions,dispatch}) {
  return (
    <div className="StartScreen">
      <p>you can answare {questions}.</p>
      <button onClick={() => dispatch({type: "start"})}>start</button>
    </div>
  );
} 