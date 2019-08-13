import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

import "./WeatherSummary.css";

const WeatherSummary = props => {
  console.log({ props });

  return (
    <>
      <div className="weather-summary">
        {props.weatherData.map((card, index) => (
          <WeatherCard
            date={card.dt_txt}
            key={index}
            weatherDes={card.weather[0].description}
            maxTemp={card.main.temp_max}
            minTemp={card.main.temp_min}
          />
        ))}
      </div>
    </>
  );
};

export default WeatherSummary;
