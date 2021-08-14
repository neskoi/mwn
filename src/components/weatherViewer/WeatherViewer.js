import React, { useEffect, useState } from 'react';
import './weatherViewer.css';

import CityName from './cityName/CityName';
import Temperatures from './temperatures/Temperatures';
import DateElement from './dateElement/DateElement';

const WeatherViewer = ({data, visible}) => {
    const [size, setSize] = useState(1);

    const reScale = () => {
        const windowWidth = window.innerWidth;
        if(windowWidth > 650) return;
        const percentualDif = windowWidth/(650 + 64);
        const scale = percentualDif > 1 ? 1 : percentualDif;
        setSize(scale);
    }

    useEffect(() => {
        reScale();
    }, [])

    window.addEventListener('resize', reScale)

    return (
        <div className="weather-viewer" style={{opacity:visible, transform: `scale(${size})`}}>
            <div className={`weather-img ${data.weather?.main.toLowerCase()}`} title={`${data.weather?.description}`}/>
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
}


export default WeatherViewer