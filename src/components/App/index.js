import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/';
import Home from '../Home/';
import List from '../List';
import Request from '../../Requests';
import './style.css';

export default function App() {

    const [homeInfo, SetHomeInfo] = useState([]);
    const [lists, setLists] = useState([]);
    const [listSlug, setListSlug] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect( () => {

        setIsLoading(true);
        const loadInfo = async () => {
            console.log(isLoading);
            let cards = await Request.getHomeCards();
            setIsLoading(false);
            SetHomeInfo(cards); 
        }

        loadInfo();

    }, [])

    useEffect( () =>{
        let loadLists = async () => {
            let lists = await Request.getList(listSlug);
            setLists(lists)
        }
        loadLists();


    },[listSlug])
    
    return (
        <div>
            <Header/>

            <main>
                <Switch>
                    <Route exact path='/'> 
                        <Home cardInfo={homeInfo}/> 
                    </Route>
                    <Route exact path={'/:id'}>
                        <List lists={lists} setListSlug={setListSlug} /> 
                        
                    </Route>
                </Switch>

            </main>
            
            <footer>

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
