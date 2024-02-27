import React from "react";
import Input from "./Input";
import Log from "./Log";
import "./Chat.scss";

function Chat() {
    return(
        <div className="chat">
            <Log />
            <Input />
        </div>
    );
}

export default Chat;