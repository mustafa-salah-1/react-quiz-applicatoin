import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
  return (
    <div className="Question">
      <div style={{ padding: '10px',marginBlock: '10px',borderRadius: '20px', backgroundColor: '#46b3d1' }}>
        {question.question}🤔
      </div>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
