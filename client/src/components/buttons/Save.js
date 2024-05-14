import React from "react";
import UserAPI from "../../utils/UserAPI";

function Save(props) {


    return (
        <button onClick={props.save}>Save</button>
    );
}

export default Save;