import React, { useEffect, useState } from 'react';
import './style.css'
import {useParams} from 'react-router-dom';
import Card from '../sharedComponents/Card/';
import ErrorPage from '../ErrorPage/';
import Pagination from '../Pagination/';
import Requests from '../../Requests';

function CardsPage() {
    //Set page loading 
    const [isLoading, setIsLoading] = useState(true)
    //Set requests parameters
    const {id} = useParams();
    const [reqParam, setReqParam] = useState('');

    const [cardData, setCardData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumber = cardData[0]?.item.info?.pages;

    //Get URL parameter
    useEffect(() => {
        const setList = () => {  
            setReqParam(id);
            setCurrentPage(1);
        }
        setList();

    }, [id, setReqParam]);

    useEffect( () =>{
        setIsLoading(true)
            const loadLists = async (pageNumber) => {
                let reqCardData = await Requests.getCardsInfo(reqParam, pageNumber);
                setCardData(reqCardData)
                setIsLoading(false)
            }
        loadLists(currentPage);

    },[reqParam, currentPage])


    if(id === 'character' || id === 'location' || id === 'episode') {
        return(
            <section className='mainContainer'>
                <div>
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber}/>
                </div>
                    {
                    cardData.length > 0 && cardData.map((elements, key) => 
                <div className='cardGroup' key={key}>
                    {
                    elements.slug.length === 0 ? 
                    <div> 
                        {isLoading &&
                        <div className='loading'>
                            <img src="http://pa1.narvii.com/6739/bdb4b304666e2b1cd7b2b43ead7861039417685b_00.gif" alt="" />
                        </div>}
                    </div> :
        
                    elements.item && elements.item.results?.map((data, key) =>
                        <Card key={key} cardData={data}/> 
                    )}
                </div>
                )}
            </section>
        );
    } 
    else {
        return (
            <section className='mainContainer'>
                <ErrorPage  />
            </section>
        )
    }
    
};

export default CardsPage;