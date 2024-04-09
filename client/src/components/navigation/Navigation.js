import React from "react";
import { useEffect, useState } from "react";
import Logout from "../buttons/Logout";
import "./Navigation.scss";
import Log from "../chat/Log";

function Navigation(props) {
  const [ links, setLinks ] = useState([]);

  useEffect(() => {
    if (props.links.length > 0) {
      setLinks(props.links);
    }
  }, [props]);

  return (
    <nav className="nav" role="navigation">
      {links.map((link) => (
        <a href={link.href} key={links.indexOf(link)}>{link.name}</a>
      ))}
      <Logout logout={props.logout}/>
    </nav>
  );
}

export default Navigation;
