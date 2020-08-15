import "./experience.scss";
import React from "react";
import { IExperience } from "../portfolio.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarker,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export const Experience = (props: { list: IExperience[] }) => {
  const ei = props.list.map((exp) => <ExperienceItem {...exp} />);
  return (
    <section id="Experience" className="experience-section">
      <div>
        <div className="title">Experience</div>
        <div className="timeline">{ei}</div>
      </div>
    </section>
  );
};

export const ExperienceItem = (props: IExperience) => {
  return (
    <div className="timeline-block timeline-block-right">
      <div className="marker"></div>
      <div className="timeline-content">
        <h3>{props.jobTitle}</h3>
        <ul>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            <span>{props.company}</span>
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faMapMarker} />
            </span>
            <span>{props.location}</span>
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
            {props.startDate.toDateString()} -{" "}
            {props.current ? "Present" : props.endDate?.toDateString()}
          </li>
        </ul>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
