import React, { Component } from "react";
import axios from "axios";
import WeatherSummary from "./components/WeatherSummary/WeatherSummary";
import Searchbar from "./components/Searchbar/Searchbar";
import "./App.css";

class App extends Component {
  state = {
    weatherData: [],
    zipCode: null
  };

  //&APPID=21fbf805dfac9a100b54b4d49657f673
  componentDidMount() {
    console.log("App.js component did Mount ran");
    axios
      .get(
        //5 Day 13 hour
        `http://api.openweathermap.org/data/2.5/forecast?zip=${
          this.state.zipCode
        },us&units=imperial&APPID=21fbf805dfac9a100b54b4d49657f673`
      )
      .then(res => {
        //array of objects
        let weatherDataRes = res.data.list.flat();
        console.log("hi");
        const filteredList = weatherDataRes.filter(obj =>
          obj.dt_txt.includes("3:00:00")
        );
        console.log("result", filteredList);
        // console.log("res", weatherDataRes);

        this.setState({
          weatherData: filteredList
        });
      })
      .catch(err => console.log(err));
  }

  searchZipcode = event => {
    event.preventDefault();
    axios
      .get(
        //5 Day 13 hour
        `http://api.openweathermap.org/data/2.5/forecast?zip=${
          this.state.zipCode
        },us&units=imperial&APPID=21fbf805dfac9a100b54b4d49657f673`
      )
      .then(res => {
        //array of objects
        let weatherDataRes = res.data.list.flat();
        const filteredList = weatherDataRes.filter(obj =>
          obj.dt_txt.includes("3:00:00")
        );
        console.log("result", filteredList);
        // console.log("res", weatherDataRes);

        this.setState({
          weatherData: filteredList,
          zipCode: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ zipCode: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Searchbar
          zipCode={this.state.zipCode}
          handleChange={this.handleChange}
          searchZipcode={this.searchZipcode}
        />
        <WeatherSummary weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default App;
