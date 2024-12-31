/* Name: Ramon McDargh-Mitchell
 * Email: rmcdarghmitchell@ucsd.edu
 * All code present is open source or free to use without restrictions!
 */
import { useState, useEffect, useRef } from "react";
import MyStopWatch from "./Components/StopWatch.tsx";

function App() {
  const [isRunning, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  let intervalRef = useRef<number | null>(null);
  const startTimer = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimer.current);
        handleFormatTime();
      }, 10);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleFormatTime = () => {
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const pad = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  const handleStartWatch = () => {
    setRunning(true);
    startTimer.current = Date.now() - elapsedTime;
  };

  const handlePauseWatch = () => {
    setRunning(false);
  };

  const handleResetWatch = () => {
    setElapsedTime(0);
    setRunning(false);
  };

  return (
    <>
      <MyStopWatch
        formatTime={handleFormatTime}
        startWatch={handleStartWatch}
        pauseWatch={handlePauseWatch}
        resetWatch={handleResetWatch}
      />
    </>
  );
}

export default App;
