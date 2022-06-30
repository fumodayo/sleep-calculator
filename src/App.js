import React, { useState } from "react";
import { Stack } from "@mui/material";
import SleepImage from "./assets/sleep.svg";
import BedTime from "./components/BedTime";
import Calculator from "./components/Calculator";
import WakeUpTime from "./components/WakeUpTime";
import ThemeContext from "./components/ThemeContext";
import "./App.css";

function App() {
  const [isShow, setIsShow] = useState("calculator");
  const [value, setValue] = useState(() => {
    const date = new Date();
    date.setHours(6);
    date.setMinutes(30);
    return date;
  });

  const handleCalculateBedTime = (value) => {
    const TimeSleep = [33300, 27900, 22500, 17100, 11700, 6300];
    const date = new Date(value);
    const seconds = date.getHours() * 3600 + date.getMinutes() * 60;

    const ListBedTime = TimeSleep.map((time) =>
      new Date(-(time - seconds) * 1000).toISOString().substring(11, 16)
    );
    // console.log("Bed Time: ", ListBedTime);
    return ListBedTime;
  };

  const handleCalculateWakeUpTime = () => {
    const TimeSleep = [33300, 27900, 22500, 17100, 11700, 6300];
    const date = new Date(Date.now());
    const seconds = date.getHours() * 3600 + date.getMinutes() * 60;

    const ListWakeUpTime = TimeSleep.map((time) =>
      new Date((time + seconds) * 1000).toISOString().substring(11, 16)
    );
    // console.log("Wake up Time", ListWakeUpTime);
    return ListWakeUpTime;
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      pt="150px"
    >
      <ThemeContext.Provider
        value={{
          value,
          setValue,
          isShow,
          setIsShow,
          handleCalculateBedTime,
          handleCalculateWakeUpTime,
        }}
      >
        <img width="500px" height="200px" src={SleepImage} alt="sleep" />
        {isShow === "calculator" && <Calculator />}
        {isShow === "bedtime" && <BedTime />}
        {isShow === "wakeuptime" && <WakeUpTime />}
      </ThemeContext.Provider>
    </Stack>
  );
}

export default App;
