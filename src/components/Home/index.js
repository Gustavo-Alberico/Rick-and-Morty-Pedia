import React from 'react';
import './style.css';
import FeaturedContent from './components/FeaturedContent/';
import ExampleCards from './components/ExampleCards/'
import About from './components/About/'


export default function Home({cardInfo}){

    return (
        <section className='container'>
            <FeaturedContent />

            <ExampleCards cardInfo={cardInfo}/>

            <About />
                        
        </section>
    );
};