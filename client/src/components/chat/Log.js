import React from "react";
import Message from "./Message.js";

function Log() {
    const messages = [
        { text: "Hello", user: "user1", index: 1 },
        { text: "Hi", user: "user2", index: 2 },
        { text: "How are you?", user: "user1", index: 3 },
    ];
    return(
        <div className="messageLog">
            {messages.map((message) => {
                return <Message key={message.index} message={message} />
            })};
        </div>
    );
}

export default Log;