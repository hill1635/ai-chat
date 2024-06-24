import React from "react";
import Message from "./Message.js";

function Log(props) {

    return(
        <div className="log">
            {
                props.chatLog !== undefined
                ? props.chatLog.map((message, index) => {
                    if (index !== 0) {
                        return <Message key={props.chatLog.indexOf(message)} message={message} />
                    }
                    return null;
                }): null
            }
        </div>
    );
}

export default Log;