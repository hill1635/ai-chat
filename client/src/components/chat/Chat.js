import React, { useEffect, useState } from "react";
import Input from "./Input";
import Log from "./Log";
import Tabs from "../tabs/Tabs";
import "./Chat.scss";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat() {
    const [ messages, setMessages ] = useState([]);
    const [ userResponse, setUserResponse ] = useState("");
    const [ aiResponse, setAiResponse ] = useState("");

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const convertMessagesToString = (messages) => {
        const messageArray = [];
        messages.forEach((message) => {
            messageArray.push(message.text);
        });
        return messageArray.join(',');
    }

    const aiRun = async (input) => {
        const messagesArray = convertMessagesToString(messages);
        const userInput = input;
        const prompt = "Use this as context: " + messagesArray + " Use this as the prompt:" + userInput;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setAiResponse(text);
    }

    useEffect(() => {
        if (userResponse !== "") {
            setMessages([...messages, { text: userResponse, user: "User", index: messages.length + 1 }]);
            aiRun(userResponse);
        }
    }, [userResponse]);

    useEffect(() => {
        if (aiResponse !== "") {
            setMessages([...messages, { text: aiResponse, user: "Gemini", index: messages.length + 1 }]);
        }
    }, [aiResponse]);

    useEffect(() => {
    }, [messages]);

    return(
        <div className="chat">
            <Tabs />
            <Log messages={messages}/>
            <Input setUserResponse={setUserResponse}/>
        </div>
    );
}

export default Chat;