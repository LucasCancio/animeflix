import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/animeflix-logo.png";
import Button from "../Button";
//import ButtonLink from "./components/ButtonLink";

import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="animeflix logo"></img>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
