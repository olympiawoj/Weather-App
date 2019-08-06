import React from "react";
import "./WeatherCard.css";

const iconMap = {
  "clear sky": "01d"
};

const WeatherCard = props => {
  console.log("Weather Card props", props);
  //ideally img src is dynamic, pointing to the image
  return (
    <div className="weather-card">
      {props.date}
      <div>{props.weatherDes}</div>

      <img src="http://openweathermap.org/img/wn/11d@2x.png" />
    </div>
  );
};

export default WeatherCard;
