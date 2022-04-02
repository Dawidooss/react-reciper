import React from 'react';
import SideHeader from "./SideHeader";
import SideContent from "./SideContent";

const LeftSide = () => {

    const handleSearch = (e) => {

    }

    return (
        <div className={"side left-side"}>
            <SideHeader
                title={"SPIŻARNIA"}
                searchbarText={"Wyszukaj przepisy"}
                onSearch={handleSearch}
            />
                <SideContent>

                </SideContent>
        </div>
    );
};

export default LeftSide;