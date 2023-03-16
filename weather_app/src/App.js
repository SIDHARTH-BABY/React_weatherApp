import React from "react";

import axios from "axios";

function App() {
  // const url =
  //   "https://api.openweathermap.org/data/2.5/weather?q=kanhangad&appid=643d13fd6879479a391778e21f97af3e";

  // const weatherAPi = axios.fetch("");
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>afjhakh</p>
          </div>
          <div className="temp">
            <h1>
              60* F
            </h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
            <div className="feels">
              <p>65 *F</p>  
            </div>
            <div className="humidity">
              <p>20%</p>
            </div>
            <div className="wind">
              <p>12mph</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
