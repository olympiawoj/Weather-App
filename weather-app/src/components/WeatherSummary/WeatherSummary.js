import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

import "./WeatherSummary.css";

const WeatherSummary = props => {
  const iconMap = {
    "clear sky": "01d",
    "few clouds": "02d"
  };

  console.log({ props });

  return (
    <>
      WeatherSummary
      <div className="weather-summary">
        {props.weatherData.map((card, index) => (
          <WeatherCard
            date={card.dt_txt}
            key={index}
            weatherDes={card.weather[0].description}
          />
        ))}
      </div>
    </>
  );
};

export default WeatherSummary;
