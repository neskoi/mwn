import React from 'react';
import './temperatures.css'

const Temperatures = ({data}) => (
    <div className="temperatures">
        <p className="min-max-temperature">{parseInt(data.main?.temp_min) || 0}</p>
        <p className="actual-temperature">{parseInt(data.main?.temp) || 0}</p>
        <p className="min-max-temperature">{parseInt(data.main?.temp_max) || 0}</p>
    </div>
)

export default Temperatures