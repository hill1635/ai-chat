import React, { useEffect, useState } from "react";
import API from "../../utils/UserAPI";
import "./Home.scss";
import Chat from "../../components/chat/Chat";

function Home(props) {

  useEffect(() => {
    console.log("user: ", props.user);
  }, [ props.user ]);

  return (
    <main className="home">
        <Chat />
    </main>
  );
}

export default Home;
