import React from "react";

const Display = ({ secondsLeft, setSecondsLeft }) => {
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <div className="timer">{minutes + ":" + seconds}</div>
    </div>
  );
};

export default Display;
