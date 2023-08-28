import React, { useEffect, useState } from "react";

const Timer = ({ setStop, active }) => {
  const [timer, setTimer] = useState(30);
  const [timerClass, setTimerClass] = useState("timer");

  useEffect(() => {
    if (timer < 0) {
      setStop(true);
    }
    if (timer <= 5) {
      setTimerClass("timer danger");
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
    setTimerClass("timer");
  }, [active]);

  return <div className={timerClass}>{timer}</div>;
};

export default Timer;
