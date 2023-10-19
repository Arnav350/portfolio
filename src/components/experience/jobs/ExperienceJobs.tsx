import { useState } from "react";
import "./ExperienceJobs.css";

const jobs: number = 4;
const tubeHeight: number = 202;

function ExperienceJobs() {
  const [screen, setScreen] = useState(0);

  const randomLeft = Math.floor(((Math.random() + screen) * tubeHeight) / jobs);
  const randomRight = Math.floor(((Math.random() + screen) * tubeHeight) / jobs);

  return (
    <div className="experience--jobs hidden">
      <div className="experience__top">
        <div className={`experience__light${screen === 0 ? " light" : ""}`}></div>
        <div className={`experience__light${screen === 1 ? " light" : ""}`}></div>
        <div className={`experience__light${screen === 2 ? " light" : ""}`}></div>
        <div className={`experience__light${screen === 3 ? " light" : ""}`}></div>
        <div className="experience__blue"></div>
      </div>
      <div className="experience__tubes">
        <div className="experience__tube" style={{ paddingTop: randomLeft }}>
          <p className="experience__date" style={screen === 0 ? {} : { display: "none" }}>
            Jun 2023
          </p>
          <p className="experience__date" style={screen === 1 ? {} : { display: "none" }}>
            Aug 2022
          </p>
          <p className="experience__date" style={screen === 2 ? {} : { display: "none" }}>
            Aug 2021
          </p>
          <p className="experience__date" style={screen === 3 ? {} : { display: "none" }}>
            Jun 2021
          </p>
          <div className="experience__arrow"></div>
          <div className="experience__fluid"></div>
        </div>
        <div className="experience__tube" style={{ paddingTop: randomRight }}>
          <p className="experience__date" style={screen === 0 ? {} : { display: "none" }}>
            Aug 2023
          </p>
          <p className="experience__date" style={screen === 1 ? {} : { display: "none" }}>
            Jan 2023
          </p>
          <p className="experience__date" style={screen === 2 ? {} : { display: "none" }}>
            May 2022
          </p>
          <p className="experience__date" style={screen === 3 ? {} : { display: "none" }}>
            Jul 2021
          </p>
          <div className="experience__arrow"></div>
          <div className="experience__fluid"></div>
        </div>
      </div>
      <div className="experience__screen" style={screen === 0 ? {} : { display: "none" }}>
        <h1 className="experience__employer">Biz4Group</h1>
        <h3 className="experience__position">Machine Learning Intern</h3>
        <p className="experience__bullet">{">"} Developed the first LLM-powered chatbot for iGaming services</p>
        <p className="experience__bullet">
          {">"} Utilized python Scikit-learn to develop solutions for prediction modeling and data interpretation
        </p>
      </div>
      <div className="experience__screen" style={screen === 1 ? {} : { display: "none" }}>
        <h1 className="experience__employer">Biz4Group</h1>
        <h3 className="experience__position">Frontend Developer Intern</h3>
        <p className="experience__bullet">
          {">"} Built frontend and databases of million-dollar E-commerce platforms with React and PostgreSQL
        </p>
        <p className="experience__bullet">
          {">"} Used ads and SEO to increase client's brand awareness and online conversions
        </p>
        <p className="experience__bullet">{">"} Optimized code to decrease website loading time by up to 40%</p>
      </div>
      <div className="experience__screen" style={screen === 2 ? {} : { display: "none" }}>
        <h1 className="experience__employer">Orlando Science Schools</h1>
        <h3 className="experience__position">Volunteer</h3>
        <p className="experience__bullet">{">"} Directly taught 100+ 5th grade students</p>
        <p className="experience__bullet">
          {">"} Created custom software to provide personalized instructions for each student
        </p>
        <p className="experience__bullet">{">"} Average class scores increased from 83% to 91%</p>
      </div>
      <div className="experience__screen" style={screen === 3 ? {} : { display: "none" }}>
        <h1 className="experience__employer">Orange Technical College</h1>
        <h3 className="experience__position">Intern</h3>
        <p className="experience__bullet">{">"} Used computer vision AI to create autonomous robots</p>
        <p className="experience__bullet">{">"} High-pressure 4-week program, exceeding 10-hour workdays</p>
        <p className="experience__bullet">
          {">"} Worked on product lifestyle steps including CADing, construction, programming, and presenting
        </p>
      </div>
      <button className="experience__left click" onClick={() => setScreen((screen + jobs - 1) % 4)}></button>
      <button className="experience__right click" onClick={() => setScreen((screen + 1) % 4)}></button>
    </div>
  );
}

export default ExperienceJobs;
