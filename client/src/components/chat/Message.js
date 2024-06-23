import React from "react";
import { useEffect, useState } from "react";
import { parse } from "marked";
import "./Chat.scss";

function Message(props) {
    const [ message, setMessage ] = useState({});

    useEffect(() => {
        if (props.message) {
            setMessage(props.message);
        }
    }, [ props.message ]);

    return(
        message.parts &&
            <div className="messageWrapper" id={message.role}>
                <span className="userName">{message.role}</span>
                <span className="userMessage" dangerouslySetInnerHTML={{ __html: parse(message.parts[0].text) }}></span>
            </div>
    );
}

export default Message;