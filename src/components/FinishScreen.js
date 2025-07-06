
export default function FinishScreen({point,maxPoint ,dispatch}) {
    const percent = (point / maxPoint) * 100;
  return (
    <div className="FinishScreen">
      {point} / {maxPoint} it's {percent.toFixed(2)}%

      <button onClick={() => dispatch({type : 'restart'})}>
        Restart Quiz
      </button>
    </div>
  );
} 