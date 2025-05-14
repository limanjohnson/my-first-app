import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import ReactLogo from '../../assets/react.svg';
import './MobileNav.css'; // Make sure you have the CSS

function MobileNav() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="mobile-nav">
            <Hamburger toggled={isOpen} toggle={setOpen} />

            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>801 998 2070</li>
                </ul>
            </div>

            <div className="Site-Name">
                <h1>Scaffolding Solutions</h1>
            </div>
            <div className="Site-Logo">
                <img src={ReactLogo} alt="React Logo" />
            </div>
        </div>
    );
}

export default MobileNav;
