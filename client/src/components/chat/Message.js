import React from "react";
import "./Chat.scss";

function Message(props) {
    return(
        <div className="messageWrapper" id={props.message.role}>
            <span className="userName">{props.message.role}</span>
            <span className="userMessage">{props.message.parts[0].text}</span>
        </div>
    );
}

export default Message;