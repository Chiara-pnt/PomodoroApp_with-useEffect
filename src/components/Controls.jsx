import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import ResetButton from "./ResetButton";
import { useState } from "react";

const Controls = ({
  timerLength,
  setSecondsLeft,
  setMode,
  isPaused,
  setIsPaused,
}) => {
  const [intervalId, setIntervalId] = useState();

  const handleReset = () => {
    setSecondsLeft(timerLength * 60);
    clearInterval(intervalId);
    setMode("work");
    setIsPaused(true);
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(intervalId);
  };

  const handleClick = () => {
    setIntervalId(
      setInterval(() => {
        setSecondsLeft((current) => current - 1);
      }, 1000)
    );

    setIsPaused(false);
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        {isPaused ? (
          <PlayButton onClick={handleClick} />
        ) : (
          <PauseButton onClick={handlePause} />
        )}

        <ResetButton onClick={handleReset} />
      </div>
    </div>
  );
};

export default Controls;
