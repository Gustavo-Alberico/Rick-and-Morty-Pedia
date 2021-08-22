import React, { useEffect } from 'react';
import './style.css'
import {useParams} from 'react-router-dom';
import Cards from '../sharedComponents/Cards'

export default function Lists({lists, setLists}) {
    const {id} = useParams();
    
    useEffect(() => {
        const setList = () => {
            setLists(id);
        }
        setList();
    }, [id, setLists]);

    return(
        <section>
            {lists.length > 0 && lists.map((items, key) => 
                <div className='cardsLists' key={key}>
                    {items.item && items.item.results?.map((list, key) =>
                        <div className='cards' key={key}>
                            <Cards   cardItem={list}/>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};