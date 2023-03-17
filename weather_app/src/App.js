import React, { useState } from "react";

import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  const [location, setLocation] = useState("");
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=643d13fd6879479a391778e21f97af3e`;

  // const weatherAPi = axios.fetch("");
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
        console.log(response.data);
      });
      setLocation('')
    }
  };
  return (
    <div className="app">   
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          placeholder="enter location"
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>afjhakh</p>
          </div>
          <div className="temp">
            <h1>60* F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65 *F</p>
            <p>Feels like </p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
          </div>
          <div className="wind">
            <p className="bold">12mph </p>
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
