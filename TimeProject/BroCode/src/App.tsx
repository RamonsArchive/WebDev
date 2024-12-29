/* Name: Ramon McDargh-Mitchell
 * Email: rmcdarghmitchell@ucsd.edu
 * All code present is open source or free to use without restrictions!
 */

import { useState, useEffect, createContext } from "react";
import MyRef from "./Components/MyTime.tsx";

export const TimerContext = createContext<Date | null>(null);

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <TimerContext.Provider value={time}>
        <MyRef />
      </TimerContext.Provider>
    </>
  );
}

export default App;
