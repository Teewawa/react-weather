import React from "react";
import WeatherIcon from "./WeatherIcon";
import { useStore } from "./unitStore";

export default function WeatherForecastDay(props) {
  const unitStore = useStore((state) => state.unitStore);

  function maxTemperature() {
    if (unitStore === "celsius") {
      let temperature = Math.round(props.data.temp.max);
      return `${temperature}°`;
    } else {
      let temperature = Math.round((props.data.temp.max * 9) / 5 + 32);
      return `${temperature}°`;
    }
  }

  function minTemperature() {
    if (unitStore === "celsius") {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    } else {
      let temperature = Math.round((props.data.temp.min * 9) / 5 + 32);
      return `${temperature}°`;
    }
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={32}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
