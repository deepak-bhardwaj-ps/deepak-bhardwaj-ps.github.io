import React from "react";
import './skills.scss'
import { WordCloud } from "./primitives/WordCloud";

export const Skills = (props: { skills: string[] }) => {
  return (
    <section className="all-skills-section" id="AllSkills">
      <div>
        <div className="title">All Skills</div>
        <div className="skills-container">
          <WordCloud words={props.skills} />
        </div>
      </div>
    </section>
  );
};
