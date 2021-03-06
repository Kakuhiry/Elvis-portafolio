import React, { ReactElement } from "react";
import "../styles/SocialCard.css";
interface Props {
  socialImg: string;
  name: string;
  link: string;
  active: boolean;
}

export default function GithubCard({
  socialImg,
  name,
  link,
  active
}: Props): ReactElement {
  return (
    <div>
      <a
        style={{
          color: "inherit",
          textDecoration: "none",
          display: "flex",
          width: "100%",
        }}
        href={link}
        onClick={active? null: e => e.preventDefault()}
      >
        <img
          className="companyLogo"
          src={require(`../images/${socialImg}`).default}
          alt=""
        />
        <h4 className="nameTxt">{name}</h4>
      </a>
    </div>
  );
}
