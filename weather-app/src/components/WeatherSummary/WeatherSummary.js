import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

import "./WeatherSummary.css";

const WeatherSummary = props => {
  console.log({ props });
  return (
    <>
      WeatherSummary
      <div className="weather-summary">
        {props.weatherData.map((card, index) => (
          <WeatherCard date={card.dt_txt} key={index} />
        ))}
      </div>
    </>
  );
};

export default WeatherSummary;
