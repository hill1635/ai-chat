import React from "react";
import "./Header.scss";
import Navigation from "../components/navigation/Navigation";
import SearchBar from "../components/search/SearchBar";

function Header(props) {
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" }
    ];

    return (
        <header>
            <img className="headerLogo" alt="Logo" src="/gemini.png"/>
            <SearchBar />
            <Navigation links={links} logout={props.logout}/>
        </header>
    );
}

export default Header;