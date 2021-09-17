import React from  'react';
import './style.css';

export default function FeaturedContent() {
    return (
        <div className='featuredContentContainer'>
            <img src="/images/Wallpaper.png" alt="Rick and Morty"/>
            <div className='featuredText'>
                <h1>Rick and Morty Pedia</h1>
            </div>
        </div>
    );
};