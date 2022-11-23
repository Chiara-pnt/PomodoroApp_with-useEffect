import React from "react";

const Range = ({
  setSecondsLeft,
  workBreak,
  setWorkBreak,
  timerLength,
  setTimerLength,
  setIsPaused,
  intervalId,
}) => {
  const handleTimerChange = (e) => {
    setIsPaused(true);
    clearInterval(intervalId);
    if (e.target.value === "") {
      setTimerLength(timerLength);
    } else {
      setTimerLength(e.target.value);
      setSecondsLeft(e.target.value * 60);
    }
  };

  const handleBreakChange = (e) => {
    setIsPaused(true);
    clearInterval(intervalId);
    if (e.target.value === "") {
      setWorkBreak(workBreak);
    } else {
      setWorkBreak(e.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="session">Work minutes: {timerLength}:00</label>
      <input
        name="session"
        type="number"
        min="5"
        max="60"
        value={timerLength}
        onChange={handleTimerChange}
      ></input>
      <label htmlFor="break">Break minutes: {workBreak}:00</label>
      <input
        name="break"
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
