import React from "react";
import "./menu.scss"
import Avatar from "../avatar.png"
import Scrollspy from "react-scrollspy"

export const Menu = () => {
  return (
    <div className="menu">
      <div className="avatar">
        <img src={Avatar} alt="Deepak Bhardwaj" />
      </div>
      {/* <ul> */}
      <Scrollspy
        items={[
          "About",
          "TopSkills",
          "AllSkills",
          "Experience",
          "BlogPosts",
          "Achievements",
        ]}
        currentClassName="active"
        rootEl=".app"
      >
        <li>
          <a href="#About">About Me</a>
        </li>
        <li>
          <a href="#TopSkills">Top Skills</a>
        </li>
        <li>
          <a href="#AllSkills">All Skills</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#BlogPosts">Blog Posts</a>
        </li>
        <li>
          <a href="#Achievements">Achievements</a>
        </li>
      </Scrollspy>
      {/* </ul> */}
    </div>
  );
};
