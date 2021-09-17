import React, {useEffect, useState} from "react";
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import './style.css'

function Pagination ({currentPage, setCurrentPage, pageNumber}) {

    const maxPage = pageNumber;
    const [changePageNumber, setChangePageNumber] = useState(currentPage)

    useEffect(() => {
        let newPageNumber = parseInt(changePageNumber)

        if(newPageNumber <= 0 || newPageNumber > maxPage ) {
            setChangePageNumber(1)
            setCurrentPage(1)
        }
        else if(isNaN(newPageNumber)) {
            setChangePageNumber('')
            setCurrentPage('')
        }
        else {
            setCurrentPage(newPageNumber)
        }

    },[changePageNumber, setChangePageNumber, maxPage, setCurrentPage])


    const firstPage = ()  => {
        setCurrentPage(1);
    }

    const back = () => {
        if(currentPage <= 1){
            setCurrentPage(1)
        } 
        else {
            setCurrentPage(currentPage - 1)
        } 
    }

    const next = () => {
        if(currentPage >= maxPage){
            setCurrentPage(maxPage)
        } 
        else {
            setCurrentPage(currentPage + 1)
        } 
    }
    const lastPage= () => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className='pagination'>
            <div className='button' onClick={()=> firstPage()}>
                <FirstPageIcon />
            </div>

            <div className='button' onClick={() => back()}>
                <KeyboardArrowLeftIcon />
            </div>


            <div className='page'>
                <input type="text" value={currentPage} onChange={(val)=>{setChangePageNumber(val.target.value)}}/> 
                /                 
                {maxPage}
            </div>


            <div className='button'>
                <KeyboardArrowRightIcon onClick={() => next()}/>
            </div>

            <div className='button' onClick={() => lastPage()}>
                <LastPageIcon />
            </div>

        </div>
    );
};

export default Pagination;