import React from "react";

const ButtonLink: React.FC<HTMLLinkElement> = (props) => {
  return (
    <a className={props.className} href={props.href}>
      Novo video
    </a>
  );
};

export default ButtonLink;
