import React from "react";
import Add from "../buttons/Add";
import "./Tabs.scss";

function Tabs(props) {

    const openChat = (chat) => {
        props.setActive(chat);
    };

    const findChat = (chatId) => {
        var chats = props.tabs;
        var selectedChat = chats.find(chat => chat.id === parseInt(chatId));
        console.log("Selected Chat: ", selectedChat);
        openChat(selectedChat);
    };

    const select = (e) => {
        // e.preventDefault();
        var tabId = e.target.parentElement.getAttribute("data-id");
        findChat(tabId);
    };


    return(
        <nav>
            <ul className="tabs">
                {props.tabs.map(tab => {
                    return (
                    <li className="tab" key={tab.id} data-id={tab.id} onClick={e => select(e)}>
                        <button onClick={e => select(e)}>
                            {tab.title}
                        </button>
                    </li>
                    );
                })}
                <Add add={props.new}/>
            </ul>
        </nav>
    );
}

export default Tabs;