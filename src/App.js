import React, { useState } from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiThunderstorm, WiFog } from 'react-icons/wi';
import { IoLocationOutline } from 'react-icons/io5'
import './App.css';

const api = {
  key: "a18f2e1334c441d547d368049603798c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');

  const [weather, setWeather] = useState({});

  const [err, setErr] = useState('');

  // const [weatherIcon, setWeatherIcon] = useState




  function search(evt) {
     if(evt.key === 'Enter') {
       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        
       .then((res) => {
          if (res.status === 404) {
            throw new Error("I didn't find this city. Please try again!");
          } 
          else {
            setErr(null);
            return res.json();
          }
        })

        .then(
          (result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        }),
        (err) => setErr(err)
        );
        evt.target.blur();
     }
  }






//   function search(evt) {
//     if(evt.key === 'Enter') {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//        .then(res => res.json())
//        .then(result => {
//          setWeather(result);
//          setQuery('');
//          console.log(result);
//        });
//        evt.target.blur();
//     }
//  }










  function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    let fulldate = `${date} ${month} ${year}`;

    return fulldate;
  }

  function getToday(d) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];

    return `${day}`

  }

  function getWeatherIcon(condition) {

    let icon = null;

    switch (condition) {
      case 'Clouds':
        icon = <WiCloudy className="weather-icon" />;
        break;

      case 'Clear':
        icon = <WiDaySunny className="weather-icon" />;
        break;

      case 'Mist':
        icon = <WiFog className="weather-icon" />;
        break;

      case 'Rain':
        icon = <WiRain className="weather-icon" />;
        break;

      case 'Thunderstorm':
        icon = <WiThunderstorm className="weather-icon" />;
        break;

      default:
        icon = <WiDaySunny className="weather-icon" />;
        break;
      }

      return icon;
  }



  return (
    <>
    <div className="app-name">WEATHER</div>
    <div className="app">

      <div className={
        (typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 
        'weather-side warm' : 'weather-side') 
        : 'weather-side'}>
        {(typeof weather.main != 'undefined') ? (
            <div className={
              (typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 
              'weather-gradient warm' : 'weather-gradient') 
              : 'weather-gradient'}>

              <div className="date-container">

                  <div className="day">
                  {getToday(new Date())}
                  </div>
                  

                  <div className="date">
                  {dateBuilder(new Date())}
                  </div>
                  

                  <div className="location">
                  <IoLocationOutline className="location-icon" />
                    {`${weather.name}, 
                    ${weather.sys.country}`}

                   
                  </div>

              </div>

              <div className="weather-container">

                {getWeatherIcon(weather.weather[0].main)}
                <div className="weather-temp">
                  {Math.round(weather.main.temp)}°c
                </div>

                <div className="weather-desc">
                  {weather.weather[0].main}
                </div>

              </div>

           </div>
        ) : ('')}

      </div>

      <div className="info-side">

        

          <div className="today-info-container">
          {(typeof weather.main != 'undefined') ? (
            <div className="today-info">

              <div className="feels-like">
                <span className="title">FEELS LIKE</span>
                <span className="value">{Math.round(weather.main.feels_like)}°C</span>
              </div>

              <br/>

              <div className="humidity">
                <span className="title">HUMIDITY</span>
                <span className="value">{weather.main.humidity}%</span>
              </div>

              <br/>

              <div className="wind">
                <span className="title">WIND</span>
                <span className="value">{weather.wind.speed} km/h</span>
              </div>

            </div>
            
            ) : ('')}
            
          </div>

            
          
          <div className="location-box">
            <input 
            type="text"
            className="searchbar"
            placeholder="Enter City..."
            enterKeyHint="search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search }
            err = {err}
            />
          </div>
          
          

      </div>
      
    </div>
            
    <footer className="footer">
      Simple Weather Application made by Gino Swanepoel <br/>
      © All rights reserved.
    </footer>


    </>
  );
}

export default App;
