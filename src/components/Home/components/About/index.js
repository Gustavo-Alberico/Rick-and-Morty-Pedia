import React from 'react';
import './style.css';

export default function About(){
    return (
        <div className='aboutContainer'>
            <img src="/images/rick-and-morty.png" alt="" />
            <div className='aboutTextContainer'>
                <div className='aboutText'>
                    <h1>About</h1>
                    <p >
                        This project shows a simple example of API consumption.
                    </p>
                </div>
            </div>
        </div>
    );
};