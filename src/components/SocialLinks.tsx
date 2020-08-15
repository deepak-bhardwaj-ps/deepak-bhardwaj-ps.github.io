import React from "react";
import "./social-links.scss";
import { ISocialProfiles } from "../portfolio.type";

export const SocialLink = (props: { link: string; icon: string }) => {
  return (
    <li>
      <a href={props.link} className={props.icon} target="blank">
        <img
          alt={props.icon}
          src={"https://ico.now.sh/" + props.icon + "/fff"}
        />
      </a>
    </li>
  );
};

export const SocialLinks = (props: {links: ISocialProfiles}) => {
  return (
    <ul className="social-links">
      <SocialLink link={"https://github.com/" + props.links.github} icon="github" />
      <SocialLink link={"https://linkedin.com/in/" + props.links.linkedIn} icon="linkedin" />
      <SocialLink link={"https://twitter.com/" + props.links.twitter} icon="twitter" />
      <SocialLink link={"https://instagram.com/" + props.links.instagram} icon="instagram" />
    </ul>
  );
};
