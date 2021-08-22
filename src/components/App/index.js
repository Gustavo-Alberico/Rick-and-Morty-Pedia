import React, {useEffect,useState} from 'react';
import './style.css';
import Header from '../sharedComponents/Header';
import {Switch, Route} from 'react-router-dom';
import Request from '../../Requests';
import Home from '../Home/';
import Lists from '../Lists';

export default function App() {

    const [homeInfo, SetHomeInfo] = useState([]);
    const [listSlug, setListSlug] = useState('');
    const [lists, setLists] = useState([]);
    
    useEffect( () => {

        const loadInfo = async () => {
            let cards = await Request.getHomeCards();
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
        <div className="App">
            <Header setListSlug={setListSlug}/>
            <main>
                <Switch>
                    <Route exact path='/'> 
                        <Home cardInfo={homeInfo}/> 
                    </Route>
                    <Route exact path={'/:id'}>
                        <Lists lists={lists} setLists={setListSlug} /> 
                    </Route>
                </Switch>

            </main>
        </div>
    );
};
