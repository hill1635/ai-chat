import React, { useEffect, useState } from "react";
import API from "../../utils/UserAPI";
import "./Home.scss";
import Chat from "../../components/chat/Chat";
import Tabs from "../../components/tabs/Tabs";

function Home(props) {
  // * chat = { id: Integer, title: String, messages: Array }
  const [ chats, setChats ] = useState([]);
  const [ activeChat, setActiveChat ] = useState({});

  useEffect(() => {
    console.log("user: ", props.user);
  }, [ props.user ]);

  return (
    <main className="home">
        <Tabs />
        <Chat />
    </main>
  );
}

export default Home;
