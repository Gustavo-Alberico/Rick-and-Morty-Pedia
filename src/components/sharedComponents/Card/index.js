import React from 'react';
import './style.css';


function Card({cardItem}){
    
    return (
        <div className='card'>
            {
                cardItem.image && <div className='cardImg'><img src={cardItem.image} alt={cardItem.name}/></div> 
            }
            <div className='cardText'>

                {cardItem.name && <div>Name: {cardItem.name}</div>}
                {cardItem.status && <div>Status: {cardItem.status}</div>}
                {cardItem.species && <div>Species: {cardItem.species}</div>}
                {cardItem.type && <div>Type: {cardItem.type}</div>}
                {cardItem.origin && <div>Origin: {cardItem.origin?.name}</div>}
                {cardItem.dimension && <div>Location: {cardItem.dimension}</div>}
                {typeof cardItem.episode === 'string' && <div>Episode: {cardItem.episode}</div> }
                {cardItem.air_date && <div>Air Date : {cardItem.air_date}</div>}
            </div>
        </div>
    );
};

export default Card;