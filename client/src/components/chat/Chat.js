import React, { useEffect, useState } from "react";
import Input from "./Input";
import Log from "./Log";
import Tabs from "../tabs/Tabs";
import "./Chat.scss";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat() {
    // * chat = { id: Integer, title: String, log: Array }
    const [ id, setId ] = useState(0);
    const [ chats, setChats ] = useState([]);
    const [ activeChat, setActiveChat ] = useState({});

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({ history: activeChat.log });

    const updateLog = (log) => {
        setActiveChat(prevChat => ({
            ...prevChat,
            log: log
        }));
    };

    const getLog = () => {
        if (activeChat.log === undefined) {
            return [];
        } else {
            return activeChat.log;
        }
    };

    const sendMessage = async (input) => {
        var prevLog = getLog();
        updateLog([...prevLog, { role: "user", parts: [{ text: input }] }]);
        getResponse(input);
    };

    const getResponse = async (input) => {
        const msg = input;
        await chat.sendMessage(msg);
        updateLog(chat._history);
    };

    return(
        <div className="chat">
            <Tabs />
            <Log chatLog={activeChat.log} />
            <Input sendMessage={sendMessage}/>
        </div>
    );
}

export default Chat;