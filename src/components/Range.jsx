import React from "react";

const Range = ({
  setSecondsLeft,
  workBreak,
  setWorkBreak,
  setIsPaused,
  timerLength,
  setTimerLength,
}) => {
  const handleTimerChange = (e) => {
    setTimerLength(e.target.value);
    setSecondsLeft(e.target.value * 60);
    setIsPaused(true);
  };

  const handleBreakChange = (e) => {
    setWorkBreak(e.target.value);
  };

  return (
    <div>
      <label>Work minutes: {timerLength}:00</label>
      <input
        type="number"
        min="5"
        max="60"
        value={timerLength}
        onChange={handleTimerChange}
      ></input>
      <label>Break minutes: {workBreak}:00</label>
      <input
        type="number"
        min="1"
        max="30"
        value={workBreak}
        onChange={handleBreakChange}
      ></input>
    </div>
  );
};

export default Range;
