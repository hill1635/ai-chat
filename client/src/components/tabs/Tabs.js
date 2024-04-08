import React from "react";

function Tabs(props) {

    return(
        <div className="tabs">
            {props.tabs.map(tab => {
                return <span className="tab" key={tab.id}>{tab.title}</span>
            })}
            <span className="tab new" onClick={props.new}>+</span>
        </div>
    );
}

export default Tabs;