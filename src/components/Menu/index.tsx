import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/animeflix-logo.png";

import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="animeflix logo"></img>
      </Link>
    </nav>
  );
}

export default Menu;
