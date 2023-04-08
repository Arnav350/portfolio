import { useState } from "react";
import ProjectsPlanet from "./planet/ProjectsPlanet";
import { FaPlay, FaPause } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const [pause, setPause] = useState<boolean>(false);

  return (
    <section className="projects">
      <div className="container">
        <h1 className="projects__title secondary hidden">Projects</h1>
        <button
          className="projects__system hidden"
          onClick={() => setPause(!pause)}
        >
          <div className="projects__sun">
            {pause ? (
              <FaPlay className="projects__pause" />
            ) : (
              <FaPause className="projects__pause" />
            )}
          </div>
          <ProjectsPlanet
            color="purple"
            heading="Temporary Title"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
            github=""
            link=""
            pause={pause}
          />
          <ProjectsPlanet
            color="red"
            heading="Temporary Title"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
            github=""
            link=""
            pause={pause}
          />
          <ProjectsPlanet
            color="green"
            heading="Temporary Title"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
            github=""
            link=""
            pause={pause}
          />
          <ProjectsPlanet
            color="orange"
            heading="Temporary Title"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
            github=""
            link=""
            pause={pause}
          />
          <ProjectsPlanet
            color="blue"
            heading="Temporary Title"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
            github=""
            link=""
            pause={pause}
          />
        </button>
      </div>
    </section>
  );
}

export default Projects;
