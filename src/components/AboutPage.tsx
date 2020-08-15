import React from 'react'
import './about-page.scss'
import Image from "../assets/about-page-bg.svg";
import { ISocialProfiles } from "../portfolio.type";
import { SocialLinks } from "./SocialLinks";

export const AboutPage = (props: {name: string, story: string, socialProfiles: ISocialProfiles}) => {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: Image, color: "red" }}
    >
      <div className="content">
        <h1>
          Hi! I'm {props.name}{" "}
          <span role="img" aria-label="Hello">
            👋
          </span>
        </h1>
        <p>{props.story}</p>
        <SocialLinks links={props.socialProfiles} />
      </div>
      <div className="image">
        <img src={Image} alt="" />
      </div>
    </section>
  );
}