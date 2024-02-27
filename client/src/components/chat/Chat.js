import React from "react";
import Input from "./Input";
import Log from "./Log";
import "./Chat.scss";

function Chat() {
    const messages = [
        { text: "Hello", user: "user1", index: 1 },
        { text: "Hi", user: "user2", index: 2 },
        { text: "How are you?", user: "user1", index: 3 },
    ];

    return(
        <div className="chat">
            <Log messages={messages}/>
            <Input />
        </div>
    );
}

export default Chat;