import React, { useEffect, useState } from "react";
import Input from "./Input";
import Log from "./Log";
import "./Chat.scss";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat() {
    const [ messages, setMessages ] = useState([]);
    const [ userResponse, setUserResponse ] = useState("");

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const aiRun = async (input) => {
        const prompt = input;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log("response:", text);
        // setMessages([...messages, { text: text, user: "ai", index: messages.length + 1 }]);
    }

    useEffect(() => {
        // setMessages([...messages, { text: userResponse, user: "user", index: messages.length + 1 }]);
        aiRun(userResponse);
    }, [userResponse]);

    return(
        <div className="chat">
            <Log messages={messages}/>
            <Input setUserResponse={setUserResponse}/>
        </div>
    );
}

export default Chat;