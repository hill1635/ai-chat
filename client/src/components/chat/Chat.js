import React, { useState, useEffect } from "react";
import Input from "./Input";
import Log from "./Log";
import Tabs from "../tabs/Tabs";
import Save from "../buttons/Save";
import UserAPI from "../../utils/UserAPI";
import "./Chat.scss";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat(props) {
    const [ id, setId ] = useState(0);
    const [ chats, setChats ] = useState([]);
    const [ activeChat, setActiveChat ] = useState({});

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({ history: activeChat.log });

    var data = {
        recents: activeChat,
    };

    useEffect(() => {
        if (props.user) {
            UserAPI.get(props.user)
                .then((res) => {
                    var recentChats = res.data.recents;
                    var latestChat = recentChats[recentChats.length - 1];
                    setActiveChat(latestChat);
                    updateChats(latestChat);
                })
                .catch((err) => { console.log(err) });
        }
    }, [ props.user ]);

    const initChat = () => {
        setActiveChat({
            id: id,
            title: "Untitled",
            log: []
        });
        setId(id + 1);
        setChats([...chats, { id: id, title: "Untitled" }]);
    };

    const updateChats = (chat) => {
        var chatIndex = chats.findIndex(c => c.id === chat.id);
        var newArray = [...chats];
        newArray[chatIndex] = chat;
        setChats(newArray);
    };

    const updateLog = (log) => {
        var newChat = { ...activeChat, log: log };
        setActiveChat(newChat);
        updateChats(newChat);
    };

    const sendMessage = async (input) => {
        updateLog([...activeChat.log, { role: "user", parts: [{ text: input }] }]);
        getResponse(input);
    };

    const getResponse = async (input) => {
        const msg = input;
        await chat.sendMessage(msg);
        updateLog(chat._history);
    };

    if (Object.keys(activeChat).length === 0) {
        initChat();
    }

    return(
        <div className="chat">
            <Tabs tabs={chats} setActive={setActiveChat} new={initChat}/>
            <Save user={props.user} data={data}/>
            <Log chatLog={activeChat.log} />
            <Input sendMessage={sendMessage}/>
        </div>
    );
}

export default Chat;