import React, { useState } from "react";
import { useStore } from "./unitStore";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  const unitStoreF = useStore((state) => state.clickF); //Updates unitStore
  const unitStoreC = useStore((state) => state.clickC); //Updates unitStore

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    unitStoreF();
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    unitStoreC();
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a
            href="/"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a
            href="/"
            onClick={showCelsius}
          >
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
