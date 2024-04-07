import React, { useState, useEffect } from "react";
import Message from "./Message.js";

function Log(props) {

    return(
        <div className="log">
            {
                props.chatLog !== undefined
                ? props.chatLog.map((message) => {
                    return <Message key={message.index} message={message} />
                }): null
            }
        </div>
    );
}

export default Log;