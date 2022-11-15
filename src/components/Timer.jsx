import React from "react";
import Animations from "./Animations";
import { useState, useEffect } from "react";
import Controls from "./Controls";
import Range from "./Range";
import Display from "./Display";

const Timer = () => {
  const [mode, setMode] = useState("work");
  const [timerLength, setTimerLength] = useState(25);
  const [workBreak, setWorkBreak] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(timerLength * 60);
  const [isPaused, setIsPaused] = useState(true);

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
        isPaused={isPaused}
        timerLength={timerLength}
        setTimerLength={setTimerLength}
      />
      <div>
        {mode === "work" ? (
          <h2 className="text">Working time!</h2>
        ) : (
          <h2 className="text">You're on Break!</h2>
        )}
      </div>
      <Display secondsLeft={secondsLeft} setSecondsLeft={setSecondsLeft} />
      <Controls
        timerLength={timerLength}
        setTimerLength={setTimerLength}
        secondsLeft={setSecondsLeft}
        setSecondsLeft={setSecondsLeft}
        setMode={setMode}
        setIsPaused={setIsPaused}
        isPaused={isPaused}
      />
      <Animations />
    </div>
  );
};

export default Timer;
