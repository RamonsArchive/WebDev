import { useContext } from "react";
import { TimerContext } from "../App.tsx";
import BabyBella from "../assets/babyBella.png";

const MyRef = () => {
  const time = useContext(TimerContext);

  const formatTime = () => {
    if (time != null) {
      let hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const meridien = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${pad(hours)}:${pad(minutes!)}:${pad(seconds!)} ${meridien}`;
    }
  };

  const pad = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="time-container">
      <div className="time">
        <span>{time ? formatTime() : "Loading..."} </span>
      </div>
      <img className="background-image" src={BabyBella} />
    </div>
  );
};

export default MyRef;
