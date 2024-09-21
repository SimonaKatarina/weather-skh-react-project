import React from "react";
import "./Weather.css";
import "./sunny.png";

export default function Weather(){
    return <div className="Weather">
        <form>
    <div className="row">
        <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control"/></div>
        <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
       </div>
   </div>
      </form>
        <div className="row">
            <div className="col-6">
        <h1>New York</h1>
        <ul>
            <li>Friday 09:00, Broken clouds</li>
            <li>Humidity 80% | Wind 13 km/h</li>
        </ul></div>
        <div className="col-6">
            <img src="src/sunny.png" alt="Sunny icon"/>
             25°C
            </div>
            
        </div>
    </div>
    
}