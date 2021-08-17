import React, { useEffect, useRef, useState } from "react";
import './page.css'
import Nav from '../components/nav/Nav';
import WeatherViewer from '../components/weatherViewer/WeatherViewer';
import bkgs from '../assets/bkgs.json';
import ErrorComponet from "../components/errorComponent/ErrorComponent";
import CircleBackground from "../components/circleBackground/CircleBackground";
import About from "../components/about/About";

const Page = (props) => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [background, setBackground] = useState("");
    const [navigation, setNavigation] = useState(0);
    const visible = useRef(0);

    function requestWeatherApi(request){
        fetch(request)
            .then(response => response.json())
            .then(json => {
                if(json.cod === 200) json.weather = json.weather[0];
                setWeatherInfo(json);
                visible.current = 1;
            });
    }

    function searchByCityName(cityName){
        const apiKey = process.env.REACT_APP_APIKEY;
        const language = navigator.language.slice(0,2);
        const request = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&units=metric&appid=${apiKey}&lang=${language}`;
        requestWeatherApi(request);
    }

    function requestGeoApi(){
        const request = `https://ipapi.co/json/`
        fetch(request)
            .then(response => response.json())
            .then(json => {
                const cityName = json.city;
                searchByCityName(cityName);
            });
    }

    function handleAboutVisibility(){
        visible.current = 0
        setNavigation(1);
    }

    function handleWeatherVisibility(){
        visible.current = 1
        setNavigation(0);
    }

    useEffect(() => {
       (async ()=>{
            const isGeoGranted = await navigator.permissions.query({name:'geolocation'});
            if(!("geolocation" in navigator) || isGeoGranted.state === "denied") {requestGeoApi(); return;};
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const apiKey = process.env.REACT_APP_APIKEY;
                const language = navigator.language.slice(0,2);
                const request = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=${language}`;
                requestWeatherApi(request);
            })
        })()
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
            <Nav search={searchByCityName} aboutVisibility={handleAboutVisibility} weatherVisibility={handleWeatherVisibility}/>
            {weatherInfo.cod == "200" ? 
                <WeatherViewer visible={visible.current} data={weatherInfo}/> : 
                <CircleBackground visible={visible.current}>
                    <ErrorComponet title="404" message="Cidade não encontrada, verifique a ortografia." />
                </CircleBackground>}

           <CircleBackground visible={navigation}>
                <About/>
            </CircleBackground>
        </section>
    )
}

export default Page