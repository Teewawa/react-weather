import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
//Structure is based off Google's weather

export default function Weather() {
  //an object intialized with variable ready="false"
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    //Updating the object
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday 07:00",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 aligned">
            <img
              src={weatherData.iconUrl}
              alt="{weatherData.description}"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a0ba5ae0dd4ffae6cc80c17468df9ce7";
    let city = "New York";
    let units = "metric";
    let endpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${endpoint}?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
