import React from 'react';
import SideHeader from "./SideHeader";

const RightSide = () => {

    const handleSearch = (e) => {

    }

    return (
        <div className={"side right-side"}>
            <SideHeader
                title={"PRZEPISY"}
                searchbarText={"Wyszukaj produkty"}
                onSearch={handleSearch}
            />
        </div>
    );
};

export default RightSide;