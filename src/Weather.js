import React from "react";
import "./Weather.css";
//Structure is based off Google's weather

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 15%</li>
            <li>Wind: 13 km/h</li>
          </ul>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}