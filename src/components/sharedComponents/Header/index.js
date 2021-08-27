import React, {useEffect, useState} from 'react';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

function Header({setListSlug}) {
    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
        const width  = window.innerWidth;
        setPageWidth(width)
        })
    },[])

    return(
        <>
        {
            pageWidth <= 768 ? 
            <MobileHeader setListSlug={setListSlug}/>
            :
            <DesktopHeader setListSlug={setListSlug} />
        }
        </>
    )
}
export default Header;