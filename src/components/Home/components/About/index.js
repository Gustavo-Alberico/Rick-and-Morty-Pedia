import React from 'react';
import './style.css';

export default function About(){
    return (
        <div className='aboutContainer'>
            <img src="/images/rick-and-morty.png" alt="" />
            <div className='aboutTextContainer'>
                <h1>lorem</h1>
                <p className='aboutText'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Dolorem id ipsam perferendis unde eius quod iste ad voluptatibus 
                    quidem quos maxime nulla neque, porro natus sapiente! Quia est quae accusamus.
                </p>
            </div>
        </div>
    );
};