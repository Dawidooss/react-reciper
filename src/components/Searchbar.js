import React from 'react';
import {FiSearch} from 'react-icons/fi'

const Searchbar = ({ text, onSearch }) => {
    return (
        <div className={"searchbar"}>
            <FiSearch className={"search-icon"}/>
            <input
                type={ "text"}
                placeholder={text}
                onKeyDown={e => {
                    if (e.key === "Enter") onSearch();
                }}
            />
        </div>
    );
};

export default Searchbar;