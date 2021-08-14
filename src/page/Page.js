import React, { useEffect, useRef, useState } from "react";
import './page.css'
import Nav from '../components/nav/Nav';
import WeatherViewer from '../components/weatherViewer/WeatherViewer';
import bkgs from '../assets/bkgs.json';

const Page = (props) => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [background, setBackground] = useState("");
    const visible = useRef(0);

    useEffect(() => {
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const apiKey = process.env.REACT_APP_APIKEY;
                const language = navigator.language.slice(0,2);
                const request = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=${language}`;
                fetch(request)
                    .then(response => response.json())
                    .then(json => {
                        json.weather = json.weather[0];
                        setWeatherInfo(json);
                    });
            })
            visible.current = 1;
        }
    }, []);

    useEffect(() => {
        const weather = weatherInfo.weather?.main.toLowerCase() || null;
        if (weather === null) return;
        const bkgsAmount = bkgs[weather].length - 1;
        const choosedBkg = Math.round(Math.random() * bkgsAmount);
        setBackground(bkgs[weather][choosedBkg]);
    }, [weatherInfo]);

    return (
        <section className="page" style={{backgroundImage: `url(${background})`}}>
            <Nav/>
            <WeatherViewer visible={visible.current} data={weatherInfo}/>
        </section>
    )
}

export default Page