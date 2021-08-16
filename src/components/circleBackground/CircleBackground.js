import React, { useEffect, useState } from "react";
import "./circleBackground.css"

const CircleBackground = ({children, visible}) => {
    const [size, setSize] = useState(1);

    const reScale = () => {
        const windowWidth = window.innerWidth;
        const percentualDif = windowWidth/(650 + 64);
        const scale = percentualDif > 1 ? 1 : percentualDif;
        setSize(scale);
    }

    useEffect(() => {
        reScale();
    }, [])

    window.addEventListener('resize', reScale);

    return (
        <div className="circle-background" style={{opacity:visible, transform: `scale(${size})`}}>
            {children}
        </div>
    )
}

export default CircleBackground;