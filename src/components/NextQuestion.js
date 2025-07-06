export default function NextQuestion({ dispatch, answer }) {
  return (
    answer && (
      <div className="NextQuestion">
        <button onClick={() => dispatch({ type: "next" })}>Next</button>
      </div>
    )
  );
}
