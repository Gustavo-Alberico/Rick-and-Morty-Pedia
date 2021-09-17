import React from 'react';
import './style.css';
import Card from '../../../sharedComponents/Card';


export default function ExampleCards({cardInfo}){
    return(
        <div className='examplesCardContainer'>
            <div className='cardTextExamples'>Examples</div>
            <div className='exampleCards'>
                {cardInfo && cardInfo.map((cardData, key) =>
                    <div className='randomCards' key={key}>
                        <h2>{cardData.title && cardData.title}</h2>
                        <Card cardData={cardData.item}/>
                    </div>
                )} 
            </div>         
        </div>
    );
};