import React, { useEffect, useState } from "react";
import Input from "./Input";
import Log from "./Log";
import Tabs from "../tabs/Tabs";
import "./Chat.scss";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat() {
    // * chat = { id: Integer, title: String, log: Array }
    const [ chats, setChats ] = useState([]);
    const [ activeChat, setActiveChat ] = useState([]);

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({ history: activeChat });

    const sendMessage = async (input) => {
        const msg = input;
        await chat.sendMessage(msg);
        setActiveChat(chat._history);
    }

    return(
        <div className="chat">
            <Tabs />
            <Log activeChat={activeChat} />
            <Input sendMessage={sendMessage}/>
        </div>
    );
}

export default Chat;