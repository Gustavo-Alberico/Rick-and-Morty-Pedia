import React, {useEffect, useState} from 'react';
import HeroPage from './components/HeroPage/';
import ExampleCards from './components/ExampleCards/'
import About from './components/About/'
import Requests from '../../Requests';
import './style.scss';

export default function Home({setIsLoading}){

    //Set card information from an API request
    const [homeCardsInfo, SetHomeCardsInfo] = useState([]);

    //Get a homepage card information
    useEffect( () => {
        setIsLoading(true);
        const loadInfo = async () => {
            let cards = await Requests.getHomeCards();
            SetHomeCardsInfo(cards); 
            setIsLoading(false);
        }
        loadInfo();
    }, [setIsLoading]);

    return (
        <section className='container'>
            <HeroPage/>

            <ExampleCards cardsInfo={homeCardsInfo}/>

            <About/>
                        
        </section>
    );
};