import React from 'react';
import './weatherViewer.css';

import CityName from './cityName/CityName';
import Temperatures from './temperatures/Temperatures';
import DateElement from './dateElement/DateElement';

const WeatherViewer = ({data}) => (
    <div className="weather-viewer">
        <img className="weather-img" src="./img/sun.svg" alt="Weather Icon"></img>
        <div className="temp"></div>
        <Temperatures data={data}/>
        <CityName className="city-name" cityName={data?.name}/>
        <DateElement/>

        <div className="wind-holder">
            <img className="wind-img" src="./img/wind.png" alt="Wind Icon"></img>
            <p className="wind-speed"> {data.wind?.speed}Km/h</p>
        </div>
    </div>
)

export default WeatherViewer