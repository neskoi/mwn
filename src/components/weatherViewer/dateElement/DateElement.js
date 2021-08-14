import React from 'react';
import './dateElement.css';

const getActualDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month < 10 ? "0" + month : month}/${year}`
}

const getWeekDay = () => {
    const date = new Date();
    const weekDays = ['Domingo', 'Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado']
    return weekDays[date.getDay()];
}

const DateElement = () => (
    <div>
        <p className="week-day">{getWeekDay()}</p>
        <p className="date">{getActualDate()}</p>
    </div>
)

export default DateElement;