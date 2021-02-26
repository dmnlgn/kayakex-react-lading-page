import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import "./Navbar.css"

// get font awesome icons
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let Link = Scroll.Link;

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // change color if scroll
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        // console.log(window.scrollY)
        if(window.scrollY >= 200){
            setNavbar(true);
        } else {
          setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

        return (
            <>
                <nav className={navbar ? 'navbar active' : 'navbar'}>
                    <div className="navbar-container">
                        <Link to="Start" className="navbar-logo">
                            KAYAKEX
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/> }
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu" }>
                            <li className="nav-item">
                                <Link to="Start" className="nav-links" onClick={closeMobileMenu}>
                                    Start
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Offer" id="offer" className="nav-links" onClick={closeMobileMenu}>
                                    Nasza oferta
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Contact" id="contact" className="nav-links" onClick={closeMobileMenu}>
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
}

export default Navbar;