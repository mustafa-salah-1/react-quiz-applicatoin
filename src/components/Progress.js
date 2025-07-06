export default function Progress({
  index,
  numQuestions,
  maxPoint,
  point,
  answer,
}) {
  return (
    <div className="Progress">
      <div
        style={{
          backgroundColor: "white",
          overflow: "hidden",
          borderRadius: "10px", 
        }}
      >
        <div
          style={{ 
            padding: "5px",
            backgroundColor: "#53d3f6",
            width: `${
              ((index + Number(answer !== null)) / numQuestions) * 100
            }%`,
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{point}</strong> / {maxPoint} Points
        </p>
      </div>
    </div>
  );
}
