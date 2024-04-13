import React from "react";
import "./Home.scss";
import Chat from "../../components/chat/Chat";

function Home(props) {

  return (
    <main className="home">
        <Chat user={props.user}/>
    </main>
  );
}

export default Home;
