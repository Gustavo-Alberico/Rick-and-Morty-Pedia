import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

function Header({setListSlug}) {
    return(
        <header>
            <div className='menuImg'>
                <Link className='link' to='/' >
                    <img src="/image/rick-and-morty.png" alt="Rick and Morty Logo" />
                </Link>
            </div>
            <div className='menuLink'>
                <Link className='link' onClick={() =>{setListSlug('character')}} to='/character' >Characters</Link>
                <Link className='link' onClick={() =>{setListSlug('location')}} to='/location' >Locations</Link>
                <Link className='link' onClick={() =>{setListSlug('episode')}} to='/episode' >Episodes</Link>
            </div>
        </header>
    )
}

export default Header;