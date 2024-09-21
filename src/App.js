import React from 'react';
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div class="container">
      <Weather />
      <footer>
        This project was coded by <a href='https://simona-katarina-portfolio.netlify.app/' target='_blank' rel="noopener noreferrer">Simona Katarína Hlinka </a>and is 
      <a href='https://github.com/SimonaKatarina/weather-skh-react-project/blob/master/README.md' target="_blank" rel="noopener noreferrer"> open-sourced on GitHub</a>
    </footer></div></div>
  );
}


