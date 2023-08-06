import React, { useEffect, useState } from "react";
import axios from "axios";

import Clear from "./weather/clear.svg";
import Cloud from "./weather/cloud.svg";
import Haze from "./weather/haze.svg";
import Snow from "./weather/snow.svg";
import Storm from "./weather/storm.svg";
import Rain from "./weather/rain.svg";

export default function Weather() {
  const [data, setData] = useState("null");
  const [location, setLocation] = useState("Eagle Mountain");
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(inputValue);

    if (inputValue !== "") {
      setLocation(inputValue);
    }

    e.preventDefault();
  };

  const APIkey = "8c88829ef9666e9b022fd1fbf55f2d18";

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${APIkey}`;

    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);

  let icon;

  //eslint-disable-next-line default-case
  switch (data.weather?.[0]?.main) {
    case "Haze":
      icon = Haze;
      break;
    case "Rain":
      icon = Rain;
      break;
    case "Clear":
      icon = Clear;
      break;
    case "Thunderstorm":
      icon = Storm;
      break;
    case "Snow":
      icon = Snow;
      break;
    case "Clouds":
      icon = Cloud;
      break;
  }

  let imgBackground;

  //eslint-disable-next-line default-case
  switch (data.weather?.[0]?.main) {
    case "Haze":
      imgBackground = require("./weather/haze.gif");
      break;
    case "Rain":
      imgBackground = require("./weather/rain.gif");
      break;
    case "Clear":
      imgBackground = require("./weather/clear.gif");
      break;
    case "Thunderstorm":
      imgBackground = require("./weather/thunder.gif");
      break;
    case "Snow":
      imgBackground = require("./weather/snow.gif");
      break;
    case "Clouds":
      imgBackground = require("./weather/clouds.gif");
      break;
  }

  let color;

  //eslint-disable-next-line default-case
  switch (data.weather?.[0]?.main) {
    case "Haze":
      color = "black";
      break;
    case "Rain":
      color = "black";
      break;
    case "Clear":
      color = "white";
      break;
    case "Thunderstorm":
      color = "white";
      break;
    case "Snow":
      color = "black";
      break;
    case "Clouds":
      color = "white";
      break;
  }

  const date = new Date();

  return (
    <div className="weatherContainer">
      <img src={imgBackground} alt="weather" className="imgBackgroundWeather" />

      <div className="weatherInfo">
        <div
          style={{
            position: "relative",
          }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "60px",
              background: "rgba(255, 255, 255, 0.2",
              width: "300px",
              height: "50px",
            }}>
            <input
              type="text"
              placeholder="Search by city or country "
              onChange={(e) => handleInput(e)}
              style={{
                background: "transparent",
                flex: 1,
                border: 0,
                padding: "10px",
                outline: "none",
                width: "100%",
                height: "100%",
              }}
            />
            <button
              type="submit"
              style={{
                cursor: "pointer",
                background: "#58629b",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                margin: "5px",
              }}>
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className={color}>
          <img className="weatherImage" src={icon} alt="weather" />
          <div className="weatherText">
            <h3 style={{ fontSize: "21px", margin: 0 }}>
              {data.name} {data.sys?.country}
            </h3>
            <p style={{ margin: 0 }}>
              <i className="fa-solid fa-temperature-three-quarters"></i>
              {parseInt(data.main?.temp)}&deg;F
            </p>
            <p style={{ fontSize: "20px" }}>{data.weather?.[0]?.description}</p>
            <p style={{ margin: 0 }}>
              {date.getUTCMonth()}/{date.getUTCDate()}/{date.getUTCFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
