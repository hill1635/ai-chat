import React, { useEffect } from "react";
import API from "../../utils/UserAPI";
import "./Home.scss";
import Chat from "../../components/chat/Chat";
import Tabs from "../../components/tabs/Tabs";

function Home(props) {

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
