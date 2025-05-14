import React from "react";
import './PageSection.css';

function PageSection({ children, className }) {
    return (
        <div className="Ln-Page-Section ${className}">
            {children}
        </div>
    );
}

export default PageSection;
