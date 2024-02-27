import React from "react";
import "./Header.scss";
import Navigation from "../components/navigation/Navigation";
import SearchBar from "../components/search/SearchBar";

function Header() {
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" }
    ];

    return (
        <header>
            <img alt="Logo" src="#"/>
            <SearchBar />
            <Navigation links={links} />
        </header>
    );
}

export default Header;