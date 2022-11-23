import React from "react";
import Animations from "./Animations";
import { useState, useEffect } from "react";
import Controls from "./Controls";
import Range from "./Range";
import Display from "./Display";
import Mode from "./Mode";

const Timer = () => {
  const [mode, setMode] = useState("work");
  const [timerLength, setTimerLength] = useState(25);
  const [workBreak, setWorkBreak] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(timerLength * 60);
  const [isPaused, setIsPaused] = useState(true);
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    function switchMode() {
      const nextMode = mode === "work" ? "break" : "work";
      const nextSeconds =
        nextMode === "work" ? timerLength * 60 : workBreak * 60;

      setMode(nextMode);
      setSecondsLeft(nextSeconds);
    }

    if (secondsLeft === 0) {
      switchMode();
    }
  }, [secondsLeft, timerLength, workBreak, mode]);

  return (
    <div>
      <Range
        setSecondsLeft={setSecondsLeft}
        workBreak={workBreak}
        setWorkBreak={setWorkBreak}
        timerLength={timerLength}
        setTimerLength={setTimerLength}
        setIsPaused={setIsPaused}
        intervalId={intervalId}
      />
      <Mode mode={mode} />
      <Display secondsLeft={secondsLeft} />
      <Controls
        timerLength={timerLength}
        setSecondsLeft={setSecondsLeft}
        setMode={setMode}
        setIsPaused={setIsPaused}
        isPaused={isPaused}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
      />
      <Animations />
    </div>
  );
};

export default Timer;
