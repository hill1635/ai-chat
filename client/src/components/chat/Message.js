import React from "react";
import "./Chat.scss";
import { useState, useEffect } from "react";

function Message(props) {
    const [ messenger, setMessenger ] = useState("");
    
    useEffect(() => {
        if (props.message.user === "user1") {
            setMessenger("user");
        } else {
            setMessenger("other");
        }
    }, [ props ]);

    return(
        <div>
            <p className={messenger}>{props.message.text}</p>
        </div>
    );
}

export default Message;