import React from 'react';
import './weatherViewer.css';

import CityName from './cityName/CityName';
import Temperatures from './temperatures/Temperatures';
import DateElement from './dateElement/DateElement';

const WeatherViewer = ({data}) => (
    <div className="weather-viewer">
        <div className={`weather-img ${data.weather?.main.toLowerCase()}`} title={`${data.weather?.main}`}/>
        <div className="temp"></div>
        <Temperatures data={data}/>
        <CityName className="city-name" cityName={data?.name}/>
        <DateElement/>

        <div className="wind-holder">
            <div className="wind-img"/>
            <p className="wind-speed"> {data.wind?.speed}m/s</p>
        </div>
    </div>
)

export default WeatherViewer