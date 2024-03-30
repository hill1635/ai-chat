import React from "react";

function Tabs() {
    var tabs = ["Tab 1", "Tab 2"];

    return(
        <div>
            {tabs.map(tab => {
                <h1>{tab}</h1>
            })};
        </div>
    );
}

export default Tabs;