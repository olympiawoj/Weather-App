import React, { Component } from "react";
import axios from "axios";
import WeatherSummary from "./components/WeatherSummary";

class App extends Component {
  state = {
    weatherData: []
  };

  //&APPID=21fbf805dfac9a100b54b4d49657f673
  componentDidMount() {
    console.log("App.js component did Mount ran");
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?zip=27605,us&units=imperial&APPID=21fbf805dfac9a100b54b4d49657f673"
      )
      .then(res => console.log(res.data.list))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        Testing <WeatherSummary />
      </div>
    );
  }
}

export default App;
