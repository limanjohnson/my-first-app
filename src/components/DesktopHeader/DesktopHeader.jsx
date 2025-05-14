import React from 'react';
import './DesktopHeader.css';

function DesktopHeader() {
    return(
        <div className="Hero-Image">
            <div className="Ln-First-Header">
                <h1>The Bay Areas Premier Scaffolding Company</h1>
            </div>
            <div className="Learn-More-Button">
                <a href="#"><button>Learn More</button></a>
            </div>
        </div>
    );
}

export default DesktopHeader;