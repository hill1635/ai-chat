import React, { useEffect, useState } from "react";
import Input from "./Input";
import Log from "./Log";
import "./Chat.scss";
import { set } from "mongoose";

function Chat() {
    const [ messages, setMessages ] = useState([]);
    const [ userResponse, setUserResponse ] = useState("");

    useEffect(() => {
        setMessages([...messages, { text: userResponse, user: "user", index: messages.length + 1 }]);
    }, [userResponse]);

    useEffect(() => {
        console.log("messages:", messages);
    }, [messages]);

    return(
        <div className="chat">
            <Log messages={messages}/>
            <Input setUserResponse={setUserResponse}/>
        </div>
    );
}

export default Chat;