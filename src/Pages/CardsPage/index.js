import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../../components/sharedComponents/Cards';
import Pagination from '../../components/Pagination'
import Requests from '../../Requests';
import './style.scss';

function CardsPage({setIsLoading, setErrorPage}) {

    //Set requests parameters
    const {category} = useParams();
    const [reqParam, setReqParam] = useState('');

    // Set Cards Data
    const [cardsData, setCardsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageNumber, setMaxPageNumber] = useState();

    //Get URL parameter
    useEffect(() => {
        if(category === 'character' || category === 'location' || category === 'episode') {
            setErrorPage(false);
            setReqParam(category);
            setCurrentPage(1);
        } else {
            setErrorPage(true);
        }

    }, [category, setReqParam, setErrorPage]);

    // Request Cards
    useEffect( () =>{
        const loadLists = async (pageNumber) => {
            setIsLoading(true);
            let reqCardsData = await Requests.getCardsInfo(reqParam, pageNumber);
            
            setMaxPageNumber(reqCardsData[0]?.item.info?.pages);

            if(pageNumber > maxPageNumber){
                reqCardsData = await Requests.getCardsInfo(reqParam, 1)
                setMaxPageNumber(reqCardsData[0]?.item.info?.pages);
                setCurrentPage(1)
            } else {
                setCardsData(reqCardsData);
                setIsLoading(false);

            }
        }
        loadLists(currentPage);

    },[reqParam, currentPage, setIsLoading, maxPageNumber]);

    return(
        <section className='mainContainer'>
            <Pagination 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                maxPageNumber={maxPageNumber}
            />
            
            <div className='cardGroup'>
            {
                cardsData[0]?.item.results?.length > 0 && cardsData[0].item.results?.map((data, key) =>
                    <Cards key={key} cardData={data}/> 
            )}
            </div>
        </section>
    );
};

export default CardsPage;