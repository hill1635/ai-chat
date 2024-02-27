import React from "react";
import { useEffect, useState } from "react";
import "./Navigation.scss";

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
        <a href={link.href}>{link.name}</a>
      ))}
    </nav>
  );
}

export default Navigation;
