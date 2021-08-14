import React, { useEffect, useState } from "react";
import './page.css'
import Nav from '../components/nav/Nav';
import WeatherViewer from '../components/weatherViewer/WeatherViewer'
const Page = (props) => {
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const apiKey = process.env.REACT_APP_APIKEY;
                const request = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
                fetch(request)
                    .then(response => response.json())
                    .then(json => {
                        setWeatherInfo(json);
                        console.log(json)
                    });
            })
        }
    }, []);


    return (
        <>
            <Nav/>
            <WeatherViewer data={weatherInfo}/>
            <div></div>
        </>
    )
}

export default Page