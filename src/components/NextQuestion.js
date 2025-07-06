export default function NextQuestion({ dispatch, index, length, answer }) {
  return (
    <div className="NextQuestion">
      {answer !== null && index < length - 1 && (
        <button onClick={() => dispatch({ type: "next" })}>Next</button>
      )}
      {answer !== null && index === length - 1 && (
        <button onClick={() => dispatch({ type: "finish" })}>Finish</button>
      )}
    </div>
  );
}
