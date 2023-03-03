import React, { useEffect, useState } from "react";
import "./ExperienceJobs.css";

function ExperienceJobs() {
  const [screen, setScreen] = useState(-1);

  const jobs: number = 3;

  function switchScreen(direction: string) {
    const screenNumber =
      direction === "right" ? (screen + 1) % jobs : (screen + jobs - 1) % jobs;

    setScreen(screenNumber);

    const tubeHeight: number = 202;
    const arrowBorder: number = 8;
    const randomLeft: number = Math.floor(
      ((Math.random() + screenNumber) * tubeHeight) / jobs
    );
    const randomRight: number = Math.floor(
      ((Math.random() + screenNumber) * tubeHeight) / jobs
    );

    const previousScreen = document.querySelector<HTMLDivElement>(
      `.experience__screen--${screen}`
    );
    const currentScreen = document.querySelector<HTMLDivElement>(
      `.experience__screen--${screenNumber}`
    );
    const previousLight = document.querySelector<HTMLDivElement>(
      `.experience__light--${screen}`
    );
    const currentLight = document.querySelector<HTMLDivElement>(
      `.experience__light--${screenNumber}`
    );
    const previousDates = document.querySelectorAll<HTMLDivElement>(
      `.experience__date--${screen}`
    );
    const currentDates = document.querySelectorAll<HTMLDivElement>(
      `.experience__date--${screenNumber}`
    );
    const allTubes =
      document.querySelectorAll<HTMLDivElement>(".experience__tube");
    const allFluids =
      document.querySelectorAll<HTMLDivElement>(".experience__fluid");

    if (previousScreen && currentScreen && previousDates && currentDates) {
      previousScreen.style.display = "none";
      currentScreen.style.display = "block";
      previousDates[0].style.display = "none";
      currentDates[0].style.display = "block";
      previousDates[1].style.display = "none";
      currentDates[1].style.display = "block";
    }
    previousLight?.classList.remove("light");
    currentLight?.classList.add("light");
    allTubes[0].style.paddingTop = `${randomLeft}px`;
    allTubes[1].style.paddingTop = `${randomRight}px`;
    allFluids[0].style.height = `${tubeHeight - randomLeft + arrowBorder}px`;
    allFluids[1].style.height = `${tubeHeight - randomRight + arrowBorder}px`;
  }

  useEffect(() => {
    switchScreen("right");
  }, []);

  return (
    <div className="experience--jobs hidden">
      <div className="experience__top">
        <div className="experience__light experience__light--0 light"></div>
        <div className="experience__light experience__light--1"></div>
        <div className="experience__light experience__light--2"></div>
        {/* <div className="experience__light experience__light--3"></div> */}
        {/* <div className="experience__light experience__light--4"></div> */}
        <div className="experience__blue"></div>
      </div>
      <div className="experience__tubes">
        <div className="experience__tube">
          <p className="experience__date experience__date--0">Aug 2022</p>
          <p className="experience__date experience__date--1">Aug 2021</p>
          <p className="experience__date experience__date--2">Jun 2019</p>
          <div className="experience__arrow"></div>
          <div className="experience__fluid"></div>
        </div>
        <div className="experience__tube">
          <p className="experience__date experience__date--0">Jan 2023</p>
          <p className="experience__date experience__date--1">May 2022</p>
          <p className="experience__date experience__date--2">Jul 2019</p>
          <div className="experience__arrow"></div>
          <div className="experience__fluid"></div>
        </div>
      </div>
      <div className="experience__screen experience__screen--0">
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
      <div className="experience__screen experience__screen--1">
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
      <div className="experience__screen experience__screen--2">
        <h1 className="experience__employer">Orange Technical College</h1>
        <h3 className="experience__position">Intern</h3>
        <p className="experience__bullet">{">"} 6 week robotics program</p>
        <p className="experience__bullet">
          {">"} Worked with team to create robots utilizing AI and present
          results to senior management
        </p>
      </div>
      {/* <div className="experience__screen experience__screen--3">
                    <h1 className="experience__employer">Title 1</h1>
                    <h3 className="experience__position">Title 1</h3>
                    <p className="experience__bullet">Bullet 1</p>
                    <p className="experience__bullet">Bullet 2</p>
                  </div>
                  <div className="experience__screen experience__screen--4">
                    <h1 className="experience__employer">Title 2</h1>
                    <h3 className="experience__position">Title 2</h3>
                    <p className="experience__bullet">Bullet 1</p>
                    <p className="experience__bullet">Bullet 2</p>
                  </div> */}
      <button
        className="experience__left click"
        onClick={() => switchScreen("left")}
      ></button>
      <button
        className="experience__right click"
        onClick={() => switchScreen("right")}
      ></button>
    </div>
  );
}

export default ExperienceJobs;
