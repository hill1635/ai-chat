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
    const [ context, setContext ] = useState({});

    useEffect(() => {
        if (activeChat) {
            setContext({history: activeChat.log});
        }
    }, [ activeChat ]);

    const initChat = () => {
        const newChat = {
            id: id,
            title: "Untitled",
            log: []
        };
        setActiveChat(newChat);
        setId(id + 1);
        setChats([...chats, newChat]);
    };

    if (activeChat === null) {
        initChat();
    }

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat(context);

    const initChats = (userData) => {
        UserAPI.get(userData)
        .then((res) => {
            var recentChats = res.data.recents;
            var latestChat = recentChats[recentChats.length - 1];
            setActiveChat(latestChat);
            updateChats(latestChat);
        })
        .catch((err) => { console.log(err) });
    };

    useEffect(() => {
        if (props.user) {
            initChats(props.user);
        }
    }, [ props.user ]);
    
    const saveChats = (chat) => {
        UserAPI.update(props.user, { recents: chats })
        .catch((err) => {
            console.log('err', err);
        });
    }
    
    useEffect(() => {
        saveChats();
    }, [ chats ]);

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
    
    const getResponse = async (input) => {
        const msg = input;
        await chat.sendMessage(msg);
        updateLog(chat._history);
    };

    const sendMessage = async (input) => {
        if (activeChat.log) {
            updateLog([...activeChat.log, { role: "user", parts: [{ text: input }] }]);
        } else {
            updateLog([{ role: "user", parts: [{ text: input }] }]);
        }
        getResponse(input);
    };

    return(
        <div className="chat">
            <Tabs tabs={chats} setActive={setActiveChat} new={initChat}/>
            <Save save={saveChats}/>
            <Log chatLog={context.history} />
            <Input sendMessage={sendMessage}/>
        </div>
    );
}

export default Chat;