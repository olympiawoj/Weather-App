import React, { Component } from "react";
import axios from "axios";
import WeatherSummary from "./components/WeatherSummary/WeatherSummary";

class App extends Component {
  state = {
    weatherData: []
  };

  //&APPID=21fbf805dfac9a100b54b4d49657f673
  componentDidMount() {
    console.log("App.js component did Mount ran");
    axios
      .get(
        //5 Day 13 hour
        "http://api.openweathermap.org/data/2.5/forecast?zip=27605,us&units=imperial&APPID=21fbf805dfac9a100b54b4d49657f673"
      )
      .then(res => {
        //array of objects
        let weatherDataRes = res.data.list.flat();
        const filteredList = weatherDataRes.filter(obj =>
          obj.dt_txt.includes("12:00:00")
        );
        console.log("result", filteredList);
        // console.log("res", weatherDataRes);

        this.setState({
          weatherData: filteredList
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <WeatherSummary weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default App;
