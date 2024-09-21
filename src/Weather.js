import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
    const[weatherData, setWeatherData]=useState({ready:false});


function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature:response.data.main.temp,
        humidity: response.data.main.humidity,
        date: "Friday 09:00",
        description: response.data.weather[0].description,
        iconUrl:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/144/453/original/sunny.png?1726893583",
        wind:response.data.wind.speed,
        city:response.data.name
    });
}



if (weatherData.ready){
    return (
    <div className="Weather">
        <form>
    <div className="row">
        <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control"  autoFocus="on" /></div>
        <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
       </div>
   </div>
      </form>
        <div className="row">
            <div className="col-8">
        <h1>New York</h1>
        <ul>
            <li className="text-capitalize">{weatherData.date}, {weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}% | Wind: {weatherData.wind} km/h</li>
        </ul></div>
        <div className="col-4">
            <img className="forecast-icon" src={weatherData.iconUrl} alt={weatherData.description}/>
            <span className="temperature"> {Math.round(weatherData.temperature)}  <span className="unit">°C</span></span>
            </div>
        </div>
    </div> );
} else {
let apiKey="96771e971243152d6b8948878c26adde";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);}


return (" Loading...");
}