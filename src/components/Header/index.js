import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./style.scss";

function Header() {
    const [isActive, setIsActive] = useState(false);
    const [mobileMenu, setMobileMenu] = useState("");

    useEffect(() => {
        if (isActive !== false) {
            setMobileMenu("active");
        } else {
            setMobileMenu("");
        }
    }, [isActive]);

    const selectPage = () => {
        setIsActive(false);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link onClick={selectPage} to="/">
                    <img src="/images/RMpedia.png" alt="Rick and Morty Logo" />
                </Link>
            </div>
            <nav className={mobileMenu}>
                <div
                    className="buttonMobile"
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    {isActive ? <CloseIcon /> : <MenuIcon />}
                </div>
                <ul className="menu">
                    <li>
                        <Link onClick={selectPage} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={selectPage} to="/character">
                            Characters
                        </Link>
                    </li>
                    <li>
                        <Link onClick={selectPage} to="/location">
                            Locations
                        </Link>
                    </li>
                    <li>
                        <Link onClick={selectPage} to="/episode">
                            Episodes
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
