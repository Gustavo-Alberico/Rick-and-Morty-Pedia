import React from 'react';
import './style.scss';

export default function About(){
    return (
        <div className='aboutContainer'>
            <div className='imgContainer'>
                <img src="/images/rick-and-morty.png" alt="" />
            </div>
            <div className='aboutTextContainer'>
                <div className='aboutText'>
                    <h1>About</h1>
                    <p>
                        This project shows a simple example of API consumption. 
                        <br/><br/>
                        Main highlights of the project:
                    </p>
                    <ul>
                        <li>
                            Third-party API consumption
                        </li>
                        <li>
                            React Router
                        </li>
                        <li>
                            Pagination
                        </li>
                        <li>
                            Responsive page
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};