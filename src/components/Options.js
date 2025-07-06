export default function Options({ question, dispatch, answer }) {
  return (
    <div className="Options">
      {question.options.map((Option, index) => (
        <button
          className={` ${index === answer ? "answer" : ""} ${
            answer !== null
              ? index === question.currectOption
                ? "currect"
                : "wrong"
              : ""
          }`}
          disabled={answer !== null}
          key={index}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {Option}
        </button>
      ))}
    </div>
  );
}
