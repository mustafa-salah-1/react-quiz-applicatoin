export default function FinishScreen({ point, maxPoint, dispatch }) {
  const percent = (point / maxPoint) * 100;

  let emoji = "😐";
  if (percent === 100) emoji = "🎉";
  else if (percent >= 80) emoji = "👏";
  else if (percent >= 50) emoji = "👍";
  else if (percent > 0) emoji = "😕";
  else emoji = "😢";

  return (
    <div className="FinishScreen">
      <p>
        You scored <strong>{point}</strong> out of <strong>{maxPoint}</strong> —
        that's <strong>{percent.toFixed(2)}%</strong> {emoji}
      </p>

      <button onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </div>
  );
}
