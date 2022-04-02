import React from 'react';
import Searchbar from "./Searchbar";
import "../stylesheets/header.css";

const SideHeader = ({ title, searchbarText, onSearch }) => {
    return (
        <div className={"side-header"} >
            <div className={"header-title"}><p>{title}</p></div>
            <div className={"header-searchbar"}>
                <Searchbar text={searchbarText} onSearch={onSearch}/>
            </div>
        </div>
    );
};

export default SideHeader;