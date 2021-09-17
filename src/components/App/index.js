import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/';
import Home from '../Home/';
import CardsPage from '../CardsPage/';
import Requests from '../../Requests';
import './style.css';

function App() {
    //Set card information from an API request
    const [homeInfo, SetHomeInfo] = useState([]);

    //Set page loading 
    const [isLoading, setIsLoading] = useState(true)

    //Get a homepage card information
    useEffect( () => {
        setIsLoading(true);
        const loadInfo = async () => {
            let cards = await Requests.getPageInfo();
            SetHomeInfo(cards); 
            setIsLoading(false);
        }
        loadInfo();
    }, [])
    
    return (
        <div>
            <Header/>
            <main>
                <Switch>
                    <Route exact path='/'> 
                        <Home cardInfo={homeInfo}/> 
                    </Route>

                    <Route exact path={'/:id'}>
                        <CardsPage /> 
                    </Route>

                </Switch>
            </main>

            <footer>
                <div>
                    Created by Gustavo Davi Alberico
                </div>
                <a href="https://rickandmortyapi.com/" rel="noreferrer" target='_blank'>API Link</a>
            </footer>

            {
            isLoading &&
            <div className='loading'>
                <img src="http://pa1.narvii.com/6739/bdb4b304666e2b1cd7b2b43ead7861039417685b_00.gif" alt="" />
            </div>
            }
        </div>
    );
};

export default App;