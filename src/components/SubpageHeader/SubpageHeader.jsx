import React from 'react';
import { useLocation } from 'react-router-dom';
import './SubpageHeader.css';

function SubpageHeader() {
    const location = useLocation();

    const pageTitle =  {
        '/services': 'Services',
        '/about': 'About Us',
        '/projects': 'Projects',
        '/contact': 'Contact Us'
    }

    const title = pageTitle[location.pathname] || 'Error: Page Name Not Found';

    return (
        <div className="Subpage-Image">
            <div className="Ln-Subpage-Header">
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default SubpageHeader;