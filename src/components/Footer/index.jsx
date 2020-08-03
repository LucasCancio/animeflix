import React from "react";
import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Orgulhosamente criado por{" "}
        <a
          href="https://www.linkedin.com/in/lucas-camargo-cancio/"
          target="_blank"
          rel="noreferrer"
        >
          Lucas Camargo Cancio
        </a>{" "}
        durante a{" "}
        <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
