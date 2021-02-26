import React from 'react'
import { Element } from 'react-scroll';
import "./Offer.css";
import Slider from "../Slider";


function Offer() {
    return (
        <>
            <Element id="Offer">
                    <h1>Nasza oferta</h1>
                <Slider/>
            </Element>
        </>
    );
}

export default Offer