import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Account from "./pages/account/Account";
import About from "./pages/about/About";
import Footer from "./footer/Footer";
import API from "./utils/UserAPI";

import "./App.scss";
import "./components/buttons/Buttons.scss";

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ user, setUser ] = useState({});
  
// useEffect(() => {
//   API.checkSession()
//   .then((res) => {
//     if (res.data[0] !== undefined) {
//       setUser(res.data[0]);
//       setLoggedIn(true);
//     }
//   });
// }, []);

  const routes = {
    home: "/",
    login: "/login",
    signup: "/signup",
    account: "/account",
    about: "/about"
  };

  return (
    <Router>
      <div className="background">
        <Header loggedIn={loggedIn} routes={routes} />
        <Routes>
          <Route exact path={routes.home} element={<Home user={user} />} />
          <Route exact path={routes.login} element={<Login />} />
          <Route exact path={routes.signup} element={<SignUp />} />
          <Route exact path={routes.account} element={<Account />} />
          <Route exact path={routes.about} element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
