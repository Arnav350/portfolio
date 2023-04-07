import React from "react";
import ExperienceJobs from "./jobs/ExperienceJobs";
import ExperienceLanguages from "./languages/ExperienceLanguages";
import "../../App.css";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <h1 className="experience__title secondary hidden">Experience</h1>
        <div className="experience__box">
          <ExperienceJobs />
          <div className="experience__conveyors hidden">
            <ExperienceLanguages direction="left" />
            <ExperienceLanguages direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
