import React from 'react';
import "./Header.css";
import { Element } from 'react-scroll';

// get icon
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Scroll from "react-scroll";

let Link = Scroll.Link;

function Header() {
    return (
        <Element id="Start">
        <div className="header-container">
            <div className="background-col"></div>
            <video src="./video/1918465.mp4" autoPlay loop muted />
            <div className="header-content">
                <h1>Wypożyczalnia profesjonalnego sprzętu sportowego</h1>
                <h2>Zajmujemy się wynajmem najwyższej jakości sprzętu do uprawiania sportów wodnych i lądowych. Oferujemy produkty polskich i zagranicznych producentów</h2>
                <Link to="Offer">
                <p className="info-p">Zobacz <FontAwesomeIcon icon={faArrowDown} /></p>
                </Link>
            </div>
            <div className="triangle"></div>
        </div>
        </Element>
    );
}

export default Header