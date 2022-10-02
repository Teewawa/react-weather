import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Guam" />
        <footer>
          This project was coded by Tiara Mendiola and is{" "}
          <a
            href="https://github.com/Teewawa/react-weather"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
