import React, { useRef } from 'react';
import './nav.css'

const Nav = ({aboutVisibility, weatherVisibility, search}) => {
    const ref = useRef("");

    function changeInputVisibility(e){
        if(e.currentTarget === e.target) {
            const actualWidht = ref.current.style.width;
            if(actualWidht === "") {
                
                ref.current.style.width = window.innerWidth > 650 ? "180px" : "100vw";
                return;
            }
            ref.current.style.width = "";
            if(ref.current.value !== ""){search(ref.current.value)}
            ref.current.value = ""
        }
    }

    function handleEnter(e){
        if(e.which === 13) changeInputVisibility(e);
    }

    return (
        <nav className="nav">
            <div className="logo">My Weather Now</div>
            <ul> 
                <li>
                    <div className="search" onClick={changeInputVisibility}>
                        <input ref={ref} onKeyDown={handleEnter} type="text" className="city-input" placeholder="Digite a cidade desejada"></input>
                    </div>
                </li>
                <li onClick={weatherVisibility}>inicio</li>
                <li onClick={aboutVisibility}>sobre</li>
            </ul>
        </nav>
    )
}

export default Nav