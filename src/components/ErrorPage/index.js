import { div } from 'prelude-ls';
import React from 'react';
import './style.css';


function ErrorPage(){
    return (
        <div className='errorPage'>
            <div className='errorPageText'>
                <h2>404 PAGE NOT FOUND</h2>
            </div>
            <div className='errorPageImg'>
                <img src="/images/ErrorIMG.png" alt="" />
            </div>
        </div>
    )
}
export default ErrorPage;