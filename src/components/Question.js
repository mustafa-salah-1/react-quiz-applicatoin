import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
  return (
    <div className="Question">
      {question.question}
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
