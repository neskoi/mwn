import React from 'react';
import './errorComponent.css';

const ErrorComponet = ({title, message}) => (
    <>
        <p className="error-title">{title}</p>
        <p className="error-message">{message}</p>
    </>
)

export default ErrorComponet;