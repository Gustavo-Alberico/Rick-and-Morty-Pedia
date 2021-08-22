import React from 'react';
import './style.css';


export default function Cards({cardItem}){
    
    return (
        <div className='card'>
            {
                cardItem.image ? <div className='cardImg'><img src={cardItem.image} alt={cardItem.name}/></div> :
                <div className='cardImg'><img src='/image/rick-and-morty-logo-grey.png' alt={cardItem.name}/></div>
            }
            <div className='cardText'>

                {cardItem.name && <div>Name: {cardItem.name}</div>}
                {cardItem.status && <div>Status: {cardItem.status}</div>}
                {cardItem.species && <div>Species: {cardItem.species}</div>}
                {cardItem.type && <div>Type: {cardItem.type}</div>}
                {cardItem.origin && <div>Origin: {cardItem.origin?.name}</div>}
                {cardItem.dimension && <div>Location: {cardItem.dimension}</div>}
                {cardItem.air_date && <div>Air Date : {cardItem.air_date}</div>}
            </div>
        </div>
    );
};