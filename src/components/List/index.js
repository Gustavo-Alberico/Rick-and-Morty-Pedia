import React, { useEffect } from 'react';
import './style.css'
import {useParams} from 'react-router-dom';
import Card from '../sharedComponents/Card'

export default function Lists({lists, setListSlug}) {
    const {id} = useParams();
    
    useEffect(() => {
        const setList = () => {
            setListSlug(id);
        }
        setList();
    }, [id, setListSlug]);

    return(
        <section>
            {lists.length > 0 && lists.map((items, key) => 
                <div className='cardsLists' key={key}>
                    {items.item && items.item.results?.map((list, key) =>
                        <div className='cards' key={key}>
                            <Card   cardItem={list}/>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};