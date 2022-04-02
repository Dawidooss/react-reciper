import React from 'react';
import "../stylesheets/side-content.css";

const SideContent = ({ children }) => {
    return (
        <div className={"side-content"}>
            {children}
        </div>
    );
};

export default SideContent;