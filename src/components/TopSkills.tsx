import React from "react";
import "./top-skills.scss";
import { ISkill } from "../portfolio.type";
import { RadialProgressBar } from './primitives/RadialProgressBar'

export const TopSkills = (props: { list: ISkill[] }) => {
  const ts = props.list.map((s) => <TopSkill {...s} />);
  return (
    <section className="skills-section" id="TopSkills">
      <div>
        <div className="title">Top Skills</div>
        <div className="top-skills">{ts}</div>;
      </div>
    </section>
  );
};

export const TopSkill = (props: ISkill) => {
  return (
    <div className="skill">
      <RadialProgressBar icon={props.name} progress={props.level * 100} />
    </div>
  );
};
