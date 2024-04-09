import React from "react";
import API from "../../utils/API";
import "./Buttons.scss";

function Logout(props) {

  return (
    <button onClick={props.logout}>Log Out</button>
  );
}

export default Logout;
