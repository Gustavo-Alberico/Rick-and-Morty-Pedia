import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home/';
import CardsPage from '../CardsPage/';
import ErrorPage from '../ErrorPage';
import './style.scss';

function App() {
    
    //Set page loading 
    const [isLoading, setIsLoading] = useState(true);
    const [errorPage, setErrorPage] = useState();

    return (
        <div>
            <Header/>
            <main>
                <Switch>
                    <Route exact path='/'> 
                        <Home setIsLoading={setIsLoading}/> 
                    </Route>

                    <Route path={'/:category'}>
                        {!errorPage ? 
                            <CardsPage setIsLoading={setIsLoading} setErrorPage={setErrorPage} /> 
                            : 
                            <ErrorPage setErrorPage={setErrorPage} />
                        }           
                    </Route>
                </Switch>
            </main>

            <footer className='footer'>
                <div>
                    Created by Gustavo Davi Alberico
                </div>
                <a href='https://rickandmortyapi.com/' rel='noreferrer' target='_blank'>API Link</a>
            </footer>
            {
                isLoading &&
                <div className='loading'>
                    <img src='http://pa1.narvii.com/6739/bdb4b304666e2b1cd7b2b43ead7861039417685b_00.gif' alt="Rick and Morty" />
                </div>
            }
        </div>
    );
};

export default App;