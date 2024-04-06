import React from "react";
import Message from "./Message.js";

function Log(props) {

    return(
        <div className="log">
            {props.activeChat.map((message) => {
                return <Message key={message.index} message={message} />
            })}
        </div>
    );
}

export default Log;