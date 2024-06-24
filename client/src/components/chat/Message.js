import React from "react";
import { useEffect, useState } from "react";
import { parse } from "marked";
import "./Chat.scss";

function Message(props) {
    const [ message, setMessage ] = useState({});

    useEffect(() => {
        if (props.message) {
            var newObj = props.message;
            newObj.parts[0].text = parse(props.message.parts[0].text);
            setMessage(newObj);
        }
    }, [ props.message ]);

    return(
        message.parts &&
            <div className="messageWrapper" id={message.role}>
                <span className="userName">{message.role}</span>
                <span className="userMessage" dangerouslySetInnerHTML={{ __html: message.parts[0].text }}></span>
            </div>
    );
}

export default Message;