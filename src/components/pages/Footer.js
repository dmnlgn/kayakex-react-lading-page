import React from 'react'
import {Element} from "react-scroll";
import "./Footer.css";

function Footer() {
        const dataFooter = {
            numberFooter: '000 000 000',
            emailFooter: 'lorem@ipsum.com',
            cookies: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum sem id est ornare, at laoreet libero luctus. Donec nulla arcu, ultricies ac ornare non, rutrum a justo. Donec vulputate tempor dolor vel dictum. Pellentesque enim elit, ultricies et arcu ut, vulputate pellentesque enim. Maecenas rhoncus odio eget vestibulum tempor.'
    }

    return (
        <>
            <Element id="Footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <div>
                            <p className="footer-font">Szybki kontakt</p>
                            <p className="footer-font">{dataFooter.numberFooter}</p>
                            <a className="footer-font">{dataFooter.emailFooter}</a>
                        </div>
                        <div>
                            <p>&copy; dmnlgn</p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div key={dataFooter.id}>
                            <p>{dataFooter.cookies}</p>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Footer;