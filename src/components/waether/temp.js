// https://api.openweathermap.org/data/2.5/weather?q=bathinda&appid=629df830d49e9bace88b5dc4408113d5

import React, { useState, useEffect } from 'react'
import "./style.css"
import Weathercard from "./weathercard"


const Temp = () => {
  const [searchValue, setsearchvalue] = useState("Bathinda");
  const [tempInfo, setTempInfo] = useState("");
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=629df830d49e9bace88b5dc4408113d5`
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0]
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys

      const myNewWeatherInfo = {
        temp, humidity, pressure, weathermood, name, speed, country, sunset
      };
      setTempInfo(myNewWeatherInfo);

      // console.log(temp);


    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [])
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search" className="searchTerm"
            autoFocus placeholder="Search city....."
            id="search"
            value={searchValue}
            onChange={(e) => setsearchvalue(e.target.value)}
          />

          <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>

        </div>
      </div>

      {/* temp card */}
      <Weathercard tempInfo = {tempInfo}/>

    </>
  )
}

export default Temp