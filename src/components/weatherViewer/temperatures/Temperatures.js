import React from 'react';
import './temperatures.css'

const Temperatures = ({data}) => (
    <div className="temperatures">
        <p className="min-max-temperature">{parseInt(data.main?.temp_min) || ''}</p>
        <p className="actual-temperature">{parseInt(data.main?.temp) || ''}</p>
        <p className="min-max-temperature">{parseInt(data.main?.temp_max) || ''}</p>
    </div>
)

export default Temperatures