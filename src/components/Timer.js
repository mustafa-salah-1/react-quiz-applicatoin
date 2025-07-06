import { useEffect } from "react";

export default function Timer({ dispatch, secondReminder }) {
  const min = Math.floor(secondReminder / 60);
  const second = secondReminder % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="Timer">
      {min <= 9 ? "0" + min : min}:{second <= 9 ? "0" + second : second}{" "}
    </div>
  );
}
