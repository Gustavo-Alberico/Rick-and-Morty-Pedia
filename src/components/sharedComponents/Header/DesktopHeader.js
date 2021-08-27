import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function DesktopHeader({setListSlug}){
    return (
        <header>
            <div className='menuImg'>
                <img src="/image/RMpedia.png" alt="Rick and Morty Logo" />
            </div>
            <div className='menuLink'>
                <Link className='link' to='/' >Home</Link>
                <Link className='link' onClick={() =>{setListSlug('character')}} to='/character' >Characters</Link>
                <Link className='link' onClick={() =>{setListSlug('location')}} to='/location' >Locations</Link>
                <Link className='link' onClick={() =>{setListSlug('episode')}} to='/episode' >Episodes</Link>
            </div>
        </header>
    );
};