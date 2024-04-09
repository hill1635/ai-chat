import React from "react";
import "./SignUp.scss";
import SignupBtn from "../../components/buttons/SignUp";
import API from "../../utils/API";

function SignUp() {
  var createAccount = () => {
    var email = document.querySelector("#userInput").value;
    var password = document.querySelector("#passwordInput").value;
    API.create({
      email: email,
      password: password
    }).then(() => {
      window.location.replace("/login");
    }).catch((err) => {
      console.log(err);
    }); 
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Username" id="userInput"></input>
      <input type="text" placeholder="Password" id="passwordInput"></input>
      <SignupBtn submit={createAccount} />
    </main>
  );
}

export default SignUp;
