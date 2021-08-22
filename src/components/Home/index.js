import React from 'react';
import './style.css';
import Cards from '../sharedComponents/Cards';


export default function Home({cardInfo}){

    return (
        <section className='container'>
            <div className='featuredContainer'>
                <img src="/image/Wallpaper.png" alt="Rick and Morty"/>
                <div className='featuredText'>
                    <h1>Rick and Morty Pedia</h1>
                </div>
            </div>
            <div className='cardSection'>
                <div className='cardSectionText'>Examples</div>
                <div className='cardContainer'>
                    {cardInfo && cardInfo.map((cardItem, key) =>
                        <div className='cardList' key={key}>
                            <h2>{cardItem.title && cardItem.title}</h2>
                            <Cards cardItem={cardItem.item}/>
                        </div>
                    )} 
                </div>         
            </div>            
        </section>
    )
};