import React from "react";

const Display = ({ secondsLeft }) => {
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <>
      <time className="timer">{minutes + ":" + seconds}</time>
    </>
  );
};

export default Display;
