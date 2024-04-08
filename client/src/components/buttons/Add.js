import React from "react";

function Add(props) {
    return (
        <button className="addBtn" onClick={props.add}>+</button>
    );
}

export default Add;