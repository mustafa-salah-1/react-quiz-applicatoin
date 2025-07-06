import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
  return (
    <div className="Question">
      <div>
        {question.question}
      </div>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
