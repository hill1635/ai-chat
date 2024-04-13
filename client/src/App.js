import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Account from "./pages/account/Account";
import About from "./pages/about/About";
import Footer from "./footer/Footer";
import UserAPI from "./utils/UserAPI";

import "./App.scss";
import "./components/buttons/Buttons.scss";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    UserAPI.checkSession()
    .then((res) => {
      var session = res.data.session;
      if (session.loggedIn) {
        setUser(session.userId);
        setLoggedIn(true);
      }
    })
    .catch((err) => { console.log(err) });
  }, []);

  const logout = () => {
    UserAPI.logout()
      .then(() => { 
        setLoggedIn(false);
        setUser("");
      })
      .then(() => { window.location.replace("/login") })
      .catch((err) => { console.log(err) });
  };

  return (
    <Router>
      <div className="container">
        <Header loggedIn={loggedIn} logout={logout}/>
        <Routes>
          <Route exact path="/" element={<Home user={user} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
