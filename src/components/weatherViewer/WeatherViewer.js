import React from 'react';
import './weatherViewer.css';

import CityName from './cityName/CityName';
import Temperatures from './temperatures/Temperatures';
import DateElement from './dateElement/DateElement';
import CircleBackground from '../circleBackground/CircleBackground';

const WeatherViewer = ({data, visible}) => {
    return (
        <CircleBackground visible = {visible}>
            <div className={`weather-img ${data.weather?.main.toLowerCase()}`} title={`${data.weather?.description}`}/>
            <div className="temp"></div>
            <Temperatures data={data}/>
            <CityName className="city-name" cityName={data?.name}/>
            <DateElement/>
            <div className="wind-holder">
                <div className="wind-img"/>
                <p className="wind-speed"> {data.wind?.speed}m/s</p>
            </div>
        </CircleBackground>
    )
}

export default WeatherViewer