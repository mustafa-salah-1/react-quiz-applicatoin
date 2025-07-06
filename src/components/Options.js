export default function Options({ question, dispatch, answer }) {
  return (
    <div style={{ display: 'flex',flexDirection:'column' ,gap:'10px' }} className="Options">
      {question.options.map((Option, index) => (
        <button style={{ textAlign: 'left' }}
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
