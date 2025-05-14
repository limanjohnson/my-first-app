import React from 'react';
import ReactLogo from '../assets/react.svg';


function DesktopNav() {
    return (
        <header>
            <img src={ReactLogo} alt="React" />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <p>(801) 998 2070</p>
        </header>
    );
}

export default DesktopNav;