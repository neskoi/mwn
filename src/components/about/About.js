import React from 'react';
import './about.css'

const About = () => (
    <div className="about">
        <p>Sobre</p>
        <div>
            <p>Esse é um site desenvolido em React a caráter de estudo, fazendo uso da OpenWeatherApi para informções do clima e IpApi para geolocalização quando necessário.</p>
            <p>Todas os backgrounds são derivados do site unsplash.com</p>
            <p>O código fonte pode ser encontrado em:</p>
            <a className="repo" href="https://github.com/neskoi/mwn">github.com/neskoi/mwn</a>
            <br/>
            <a  className="signature" href="https://www.linkedin.com/in/nesjan/">Koi Nes</a>
        </div>
    </div>
)

export default About;