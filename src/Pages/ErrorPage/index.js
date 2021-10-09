import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import './style.scss';


function ErrorPage({setErrorPage}){
    // set Url
    const {category} = useParams();

    // Get Url
    useEffect(() => {
        if(category === 'character' || category === 'location' || category === 'episode') {
            setErrorPage(false);
        } else {
            setErrorPage(true);
        }

    }, [category, setErrorPage]);

    return (
        <div className='errorPage'>
            <div className='errorPageText'>
                <h1>404 PAGE NOT FOUND</h1>
            </div>
            <div className='errorPageImg'>
                <img src="/images/ErrorIMG.png" alt="" />
            </div>
        </div>
    )
}
export default ErrorPage;