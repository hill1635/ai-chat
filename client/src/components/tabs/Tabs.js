import React from "react";
import "./Tabs.scss";

function Tabs(props) {

    const select = (e) => {
        e.preventDefault();
        console.log(e.target.getAttribute('data-id'));
    }

    return(
        <nav>
            <ul className="tabs">
                {props.tabs.map(tab => {
                    return <li className="tab" key={tab.id} data-id={tab.id} onClick={e => select(e)}>{tab.title}</li>
                })}
                <li className="tab new" onClick={props.new}>+</li>
            </ul>
        </nav>
    );
}

export default Tabs;