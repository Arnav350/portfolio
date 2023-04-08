import { useState } from "react";
import "./ExperienceJobs.css";

const jobs: number = 3;
const tubeHeight: number = 202;

function ExperienceJobs() {
  const [screen, setScreen] = useState(0);

  const randomLeft = Math.floor(((Math.random() + screen) * tubeHeight) / jobs);
  const randomRight = Math.floor(
    ((Math.random() + screen) * tubeHeight) / jobs
  );

  return (
    <div className="experience--jobs hidden">
      <div className="experience__top">
        <div
          className={`experience__light${screen === 0 ? " light" : ""}`}
        ></div>
        <div
          className={`experience__light${screen === 1 ? " light" : ""}`}
        ></div>
        <div
          className={`experience__light${screen === 2 ? " light" : ""}`}
        ></div>
        <div className="experience__blue"></div>
      </div>
      <div className="experience__tubes">
        <div className="experience__tube" style={{ paddingTop: randomLeft }}>
          <p
            className="experience__date"
            style={screen === 0 ? {} : { display: "none" }}
          >
            Aug 2022
          </p>
          <p
            className="experience__date"
            style={screen === 1 ? {} : { display: "none" }}
          >
            Aug 2021
          </p>
          <p
            className="experience__date"
            style={screen === 2 ? {} : { display: "none" }}
          >
            Jun 2019
          </p>
          <div className="experience__arrow"></div>
          <div className="experience__fluid"></div>
        </div>
        <div className="experience__tube" style={{ paddingTop: randomRight }}>
          <p
            className="experience__date"
            style={screen === 0 ? {} : { display: "none" }}
          >
            Jan 2023
          </p>
          <p
            className="experience__date"
            style={screen === 1 ? {} : { display: "none" }}
          >
            May 2022
          </p>
          <p
            className="experience__date"
            style={screen === 2 ? {} : { display: "none" }}
          >
            Jul 2019
          </p>
          <div className="experience__arrow"></div>
          <div className="experience__fluid"></div>
        </div>
      </div>
      <div
        className="experience__screen"
        style={screen === 0 ? {} : { display: "none" }}
      >
        <h1 className="experience__employer">Biz4Group</h1>
        <h3 className="experience__position">Frontend Developer Intern</h3>
        <p className="experience__bullet">
          {">"} Designed e-commerce platforms for clients using React, TS, and
          Redux
        </p>
        <p className="experience__bullet">
          {">"} Created digital marketing strategies to increase brand awareness
          for clients
        </p>
      </div>
      <div
        className="experience__screen"
        style={screen === 1 ? {} : { display: "none" }}
      >
        <h1 className="experience__employer">Orlando Science Schools</h1>
        <h3 className="experience__position">Volunteer</h3>
        <p className="experience__bullet">
          {">"} Year long teaching experience
        </p>
        <p className="experience__bullet">
          {">"} Mentored over 50 elementary school students in school subjects
          and created React program to assist in teaching
        </p>
      </div>
      <div
        className="experience__screen"
        style={screen === 2 ? {} : { display: "none" }}
      >
        <h1 className="experience__employer">Orange Technical College</h1>
        <h3 className="experience__position">Intern</h3>
        <p className="experience__bullet">{">"} 6 week robotics program</p>
        <p className="experience__bullet">
          {">"} Worked with team to create robots utilizing AI and present
          results to senior management
        </p>
      </div>
      <button
        className="experience__left click"
        onClick={() => setScreen((screen + jobs - 1) % 3)}
      ></button>
      <button
        className="experience__right click"
        onClick={() => setScreen((screen + 1) % 3)}
      ></button>
    </div>
  );
}

export default ExperienceJobs;
