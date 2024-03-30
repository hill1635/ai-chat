import React from "react";

function Tabs() {
    var tabs = ["Tab 1", "Tab 2"];

    return(
        <div className="tabs">
            {tabs.map(tab => {
                return <span className="tab">{tab}</span>
            })}
        </div>
    );
}

export default Tabs;