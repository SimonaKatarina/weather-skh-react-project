import React from "react";
import "./Weather.css";

export default function Weather(){
    return <div className="Weather">
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
            <li>Friday 09:00, Broken clouds</li>
            <li>Humidity 80% | Wind 13 km/h</li>
        </ul></div>
        <div className="col-4">
            <img className="forecast-icon" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny icon"/>
            <span className="temperature"> 25  <span className="unit">°C</span></span>
            </div>
            
        </div>
    </div>
    
}