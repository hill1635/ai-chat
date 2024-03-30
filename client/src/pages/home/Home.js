import React, { useEffect } from "react";
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
