import React from "react";
import "./WeatherCard.css";

const WeatherCard = props => {
  const iconMap = {
    "clear sky": "01d",
    "few clouds": "02d",
    "scattered clouds": "03d",
    "broken clouds": "04d",
    "shower rain": "09d",
    rain: "10d",
    thunderstorm: "11d",
    "light rain": "10d",
    snow: "13d",
    mist: "50d",
    "overcast clouds": "04d",
    "moderate rain": "10d"
  };

  let url = null;
  if (props.weatherDes in iconMap) {
    let dynamic = iconMap[props.weatherDes];
    url = `http://openweathermap.org/img/wn/${dynamic}@2x.png`;
  }

  console.log("Weather Card props", props);
  //ideally img src is dynamic, pointing to the image
  return (
    <div className="weather-card">
      {props.date}
      <div>{props.weatherDes}</div>
      <img src={url} />
    </div>
  );
};

export default WeatherCard;
