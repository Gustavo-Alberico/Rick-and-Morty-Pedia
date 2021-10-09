import React, {useEffect} from "react";
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import './style.scss'

function Pagination ({currentPage, setCurrentPage, maxPageNumber}) {

    useEffect(() => {

        if(currentPage <= 0 || currentPage > maxPageNumber ) {
            setCurrentPage(1)
        }
        else if(isNaN(currentPage)) {
            setCurrentPage('')
        }
        else {
            setCurrentPage(currentPage)
        }

    },[currentPage, setCurrentPage, maxPageNumber])

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
        if(currentPage >= maxPageNumber){
            setCurrentPage(maxPageNumber)
        } 
        else {
            setCurrentPage(currentPage + 1)
        } 
    }
    const lastPage= () => {
        setCurrentPage(maxPageNumber);
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
                <input type="text" value={currentPage} onChange={(val)=>{setCurrentPage(val.target.value)}}/> 
                /                 
                {maxPageNumber}
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