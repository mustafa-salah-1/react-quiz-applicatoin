export default function Footer({ children }) {
  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="Footer"
    >
      {children}
    </div>
  );
}
