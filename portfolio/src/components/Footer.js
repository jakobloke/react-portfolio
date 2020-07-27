import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
    <>
    <div classname="footer">
        <a href="https://github.com/jakobloke" target="_blank" rel="noopener noreferrer">
            <img alt="Github" className="footer-img" src={require("../assets/icons/github.png")} />
        </a>

        <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/jakob-loke-49b0b484/" target="_blank" rel="noopener noreferrer">
            <img alt="LinkedIn" className="footer-img" src={require("../assets/icons/linkedin.png")} />
        </a>
    </div>
    </>
    );

    export default Footer;