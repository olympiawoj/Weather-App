import React from "react";
import "./WeatherCard.css";

const WeatherCard = props => {
  console.log("Weather Card props", props);

  return <div className="weather-card"> {props.date} </div>;
};

export default WeatherCard;
