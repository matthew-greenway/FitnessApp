import React, { useState } from "react";
import axios from "axios";
import './App.css';
import yokedMan from './16419960151339.jpg';
import Spotify from './spotify/Spotify.js';
console.log(yokedMan);

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  const [data, setData] = useState({});
  const [spotButton, setSpotButton] = useState(false);
  const [location, setLocation] = useState("");
  const zipurl = `https://api.openweathermap.org/data/2.5/weather?zip=${location},us&appid=7c8b9bc22174b70ea79456c113c8a954&units=imperial`;

  function spotButtonHandler () {
    setSpotButton(true);
  }

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(zipurl).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  if (!spotButton && !code) {
    return (
      <div className="app">
        <h3> WORKOUT APP  </h3>
        <h4> LETS HIT SOME GAINS </h4>

        <div>

          <button style={{ width: 420, backgroundColor: '#F56600', marginTop: 20, minHeight: 50, }}>
            <h2 >Generate Workout</h2>
          </button>

          <button style={{ width: 420, backgroundColor: '#522D80', marginTop: 20, minHeight: 50, }} onClick={spotButtonHandler}>
            <h2 >Play Music with Spotify</h2>
          </button>

        </div>
        <img src={yokedMan} alt="Man Working Out" />
        <h5>Enter Zip Code for Weather Information</h5>
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Zip Code"
            type="text"
          />
        </div>
        <div>
          <div className="top">
            <div className="location">
              <h5>{data.name}</h5>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°F</h1> : null}
            </div>
            <div className="description">
              {(() => {
                if (data.weather) {
                  return <h1>{data.weather[0].main}</h1>;
                }
              })()}
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like}°F</p>
              ) : null}
              {data.main ? <p>Feels like</p> : null}
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              {data.main ? <p>Humidity</p> : null}
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
              {data.wind ? <p>Wind</p> : null}
            </div>
          </div>
        </div>
        <div>
          {(() => {
            if (data.weather) {
              if (data.main.temp <= 50.0 || data.weather[0].main == "Mist" || data.weather[0].main == "Rain" || data.weather[0].main == "Snow") {
                return <h4>Weather looks bad out there! Maybe stay inside and do some calisthenics?</h4>
              } else {
                return <h4>Weather looks nice out there! Maybe go for a run?</h4>;
              }
            }
          })()}
        </div>
      </div>
    );

  }
  else{
    return (
      <Spotify />
    )
  }
}

export default App;
