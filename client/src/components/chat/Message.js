import React from "react";
import "./Chat.scss";

function Message(props) {
    return(
        <div className="messageWrapper" id={props.message.user}>
            <span className="userName">{props.message.user}</span>
            <span className="userMessage">{props.message.text}</span>
        </div>
    );
}

export default Message;