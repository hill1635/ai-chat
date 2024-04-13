import React from "react";
import "./Login.scss";
import LoginBtn from "../../components/buttons/Login";
import UserAPI from "../../utils/UserAPI";

function Login() {
  var startSession = () => {
    var email = document.querySelector("#loginUser").value;
    var password = document.querySelector("#loginPassword").value;
    UserAPI.login({
        email: email,
        password: password
    })
    .then(() => window.location.href="/")
    .catch((err) => console.log(err));
  };

  return (
    <main>
      <h1>Login</h1>
      <input type="text" placeholder="Username" id="loginUser"></input>
      <input type="text" placeholder="Password" id="loginPassword"></input>
      <LoginBtn login={startSession}/>
    </main>
  );
}

export default Login;
