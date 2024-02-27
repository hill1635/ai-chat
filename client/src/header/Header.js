import React from "react";
import "./Header.scss";
import Navigation from "../components/navigation/Navigation";
import SearchBar from "../components/search/SearchBar";

function Header(props) {
    return (
        <header>
            <img alt="Logo" src="#"/>
            <SearchBar />
            <Navigation links={props.routes} />
        </header>
    );
}

export default Header;