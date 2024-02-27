import React, { useEffect, useState } from "react";
import Input from "./Input";
import Log from "./Log";
import "./Chat.scss";

function Chat() {
    const [ messages, setMessages ] = useState([]);
    const [ userResponse, setUserResponse ] = useState("");

    useEffect(() => {
        setMessages([...messages, { text: userResponse, user: "user", index: messages.length + 1 }]);
    }, [userResponse]);

    return(
        <div className="chat">
            <Log messages={messages}/>
            <Input setUserResponse={setUserResponse}/>
        </div>
    );
}

export default Chat;