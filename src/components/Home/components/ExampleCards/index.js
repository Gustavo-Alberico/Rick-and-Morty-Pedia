import React from 'react';
import './style.css';
import Card from '../../../sharedComponents/Card';


export default function ExampleCards({cardInfo}){
    return(
        <div className='examplesCardContainer'>
            <div className='cardTextExamples'>Examples</div>
            <div className='exampleCards'>
                {cardInfo && cardInfo.map((cardItem, key) =>
                    <div className='cardList' key={key}>
                        <h2>{cardItem.title && cardItem.title}</h2>
                        <Card cardItem={cardItem.item}/>
                    </div>
                )} 
            </div>         
        </div>
    );
};