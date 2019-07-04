import React, { Component } from "react";
import WeatherSummary from "./components/WeatherSummary";

class App extends Component {
  state = {
    weatherData: []
  };

  componentDidMount() {
    console.log("App.js component did Mount ran");
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
