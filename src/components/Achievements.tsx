import React from "react";
import "./achievements.scss";
import { IAchievement } from "../portfolio.type";

export const Achievements = (props: { list: IAchievement[] }) => {
  const cards = props.list.map((a) => <AchievementCard content={a} />);
  return (
    <section className="achievements-section" id="Achievements">
      <div>
        <div className="title">Achievements</div>
        <div className="container">{cards}</div>
      </div>
    </section>
  );
};

export const AchievementCard = (props: { content: IAchievement }) => {
  return (
    <div className="card">
      <div className="image">
        <img
          src={"https://ico.now.sh/" + props.content.icon + "/fff"}
          alt={props.content.title}
        />
      </div>
      <div className="content">
        <div className="title">{props.content.title}</div>
        <div className="issuer">{props.content.issuer}</div>
        <div className="date">
          {FormatDate(props.content.issueData)} -{" "}
          {props.content.expiryDate
            ? FormatDate(props.content.expiryDate)
            : "No Expiry"}
        </div>
      </div>
    </div>
  );
};

const FormatDate = (dt: Date) => {
  const formatter = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" })
  return formatter.format(dt)
}
