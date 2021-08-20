import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";

import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";
import { IoLocationOutline } from "react-icons/io5";
import "./App.css";

const api = {
  key: "a18f2e1334c441d547d368049603798c",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // const [query, setQuery] = useState("");

  const [addressObj, setAddressObj] = useState("");

  const [weather, setWeather] = useState({});

  const [err, setErr] = useState("");

  const [address, setAddress] = useState("");

  // const [weatherIcon, setWeatherIcon] = useState

  const getAddressObject = (address_components) => {
    console.log(address_components);
    const ShouldBeComponent = {
      street_number: ["street_number"],
      postal_code: ["postal_code"],
      street: ["street_address", "route"],
      province: [
        "administrative_area_level_1",
        "administrative_area_level_2",
        "administrative_area_level_3",
        "administrative_area_level_4",
        "administrative_area_level_5",
      ],
      city: [
        "locality",
        "sublocality",
        "sublocality_level_1",
        "sublocality_level_2",
        "sublocality_level_3",
        "sublocality_level_4",
      ],
      country: ["country"],
    };

    let address = {
      street_number: "",
      postal_code: "",
      street: "",
      province: "",
      city: "",
      country: "",
    };

    address_components.forEach((component) => {
      for (var shouldBe in ShouldBeComponent) {
        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
          if (shouldBe === "country") {
            address[shouldBe] = component.short_name;
          } else {
            address[shouldBe] = component.long_name;
          }
        }
      }
    });

    // Fix the shape to match our schema
    address.address = address.street_number + " " + address.street;
    delete address.street_number;
    delete address.street;
    if (address.country === "US") {
      address.state = address.province;
      delete address.province;
    }
    return address;
  };

  function search() {
    fetch(
      `${api.base}weather?q=${addressObj.city}&units=metric&APPID=${api.key}`
    )
      .then((res) => {
        if (res.status === 404) {
          throw new Error("I didn't find this city. Please try again!");
        } else {
          setErr(null);
          return res.json();
        }
      })

      .then(
        (result) => {
          setWeather(result);
          // setQuery("");
          console.log(result);
        },
        (err) => setErr(err)
      );
    console.log(addressObj.city);
    // evt.target.blur();
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
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    let fulldate = `${date} ${month} ${year}`;

    return fulldate;
  }

  function getToday(d) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];

    return `${day}`;
  }

  function getWeatherIcon(condition) {
    let icon = null;

    switch (condition) {
      case "Clouds":
        icon = <WiCloudy className="weather-icon" />;
        break;

      case "Clear":
        icon = <WiDaySunny className="weather-icon" />;
        break;

      case "Mist":
        icon = <WiFog className="weather-icon" />;
        break;

      case "Rain":
        icon = <WiRain className="weather-icon" />;
        break;

      case "Thunderstorm":
        icon = <WiThunderstorm className="weather-icon" />;
        break;

      default:
        icon = <WiDaySunny className="weather-icon" />;
        break;
    }

    return icon;
  }

  useEffect(() => {
    const func = async () => {
      const geocodeObj =
        address &&
        address.value &&
        (await geocodeByPlaceId(address.value.place_id));
      const addressObject =
        geocodeObj && getAddressObject(geocodeObj[0].address_components);
      console.log("addressObject", addressObject);
      setAddressObj(addressObject);
    };
    func();
  }, [address]);

  useEffect(() => {
    search();
  }, [addressObj]);

  useEffect(() => {
    if (navigator.geolocation) {
      console.log("GeoLocation is Available");
    } else {
      console.log("GeoLocation not available");
    }
  }, []);

  return (
    <>
      <div className="app-name">WEATHER</div>
      <div className="app">
        <div
          className={
            typeof weather.main != "undefined"
              ? weather.main.temp > 16
                ? "weather-side warm"
                : "weather-side"
              : "weather-side"
          }
        >
          {typeof weather.main != "undefined" ? (
            <div
              className={
                typeof weather.main != "undefined"
                  ? weather.main.temp > 16
                    ? "weather-gradient warm"
                    : "weather-gradient"
                  : "weather-gradient"
              }
            >
              <div className="date-container">
                <div className="day">{getToday(new Date())}</div>

                <div className="date">{dateBuilder(new Date())}</div>

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

                <div className="weather-desc">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="info-side">
          <div className="today-info-container">
            {typeof weather.main != "undefined" ? (
              <div className="today-info">
                <div className="feels-like">
                  <span className="title">FEELS LIKE</span>
                  <span className="value">
                    {Math.round(weather.main.feels_like)}°C
                  </span>
                </div>

                <br />

                <div className="humidity">
                  <span className="title">HUMIDITY</span>
                  <span className="value">{weather.main.humidity}%</span>
                </div>

                <br />

                <div className="wind">
                  <span className="title">WIND</span>
                  <span className="value">{weather.wind.speed} km/h</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="location-box">
            <GooglePlacesAutocomplete
              apiKey="AIzaSyAGKZ_AIonUbG33gB3fLiqfA0LQOxtbEPY"
              initialValue="Port Elizabeth"
              placeholder="Type in an address"
              minLength={2} // minimum length of text to search
              returnKeyType={"search"}
              listViewDisplayed={"auto"} // true/false/undefined
              renderDescription={(row) => row.description}
              fetchDetails={true}
              selectProps={{
                address,
                onChange: (e) => {
                  setAddress(e);
                },
                styles: {
                  input: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  dropdownIndicator: (provided) => null,
                  indicatorSeparator: (provided) => null,
                },
              }}
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        Simple Weather Application made by Gino Swanepoel <br />© All rights
        reserved.
      </footer>
    </>
  );
}

export default App;
