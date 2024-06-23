import React from "react";
import { useEffect, useState } from "react";
import "./Chat.scss";

function Message(props) {
    const [ message, setMessage ] = useState({});

    useEffect(() => {
        if (props.message) {
            setMessage(props.message);
        }
    }, [ props.message ]);

    return(
        message &&
            <div className="messageWrapper" id={props.message.role}>
                <span className="userName">{props.message.role}</span>
                <span className="userMessage">{props.message.parts[0].text}</span>
            </div>
    );
}

export default Message;