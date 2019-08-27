import React from "react";
import "./WeatherCard.css";

const WeatherCard = props => {
  const iconMap = {
    // "clear sky": "01d",
    // ⛅

    // "clear sky": "01d",
    // "few clouds": "02d",
    // "scattered clouds": "03d",
    // "broken clouds": "04d",
    // "shower rain": "09d",
    // rain: "10d",
    // thunderstorm: "11d",
    // "light rain": "10d",
    // snow: "13d",
    // mist: "50d",
    // "overcast clouds": "04d",
    // "moderate rain": "10d",
    // "moderate rain": "🌧",
    // "heavy intensity rain": "10d"

    "clear sky": "☀️",
    "few clouds": "⛅",
    "scattered clouds": "☁️",
    "broken clouds": "☁️",
    "shower rain": "🌧",
    rain: "🌧",
    thunderstorm: "🌧",
    "light rain": "🌧",
    snow: "❄️",
    mist: "🌫️",
    "overcast clouds": "☁️",
    "moderate rain": "🌧",
    "heavy intensity rain": "🌧"
  };

  const emojiMap = {
    "clear sky": ":sky"
  };

  let url = null;
  if (props.weatherDes in iconMap) {
    let dynamic = iconMap[props.weatherDes];
    url = `http://openweathermap.org/img/wn/${dynamic}@2x.png`;
  }

  console.log("Weather Card props", props);
  const day = new Date(props.date).getDay();

  const weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Weds";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  //ideally img src is dynamic, pointing to the image
  return (
    <div className="weather-card">
      {weekday[day]}
      <div>{props.weatherDes}</div>
      {/* <img className="weather-icon" src={url} /> */}
      <span aria-label={props.weatherDes} className="emoji" role="img">
        {iconMap[props.weatherDes]}
      </span>
      <div className="temp">
        <p>{props.maxTemp}&deg; </p>
        <p>{props.minTemp}&deg;</p>
      </div>
    </div>
  );
};

export default WeatherCard;
