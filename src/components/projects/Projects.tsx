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
        <button className="projects__system hidden">
          <div className="projects__corona"></div>
          <div className="projects__sun" onClick={() => setPause(!pause)}>
            {pause ? <FaPlay className="projects__pause" /> : <FaPause className="projects__pause" />}
          </div>
          <ProjectsPlanet
            color="red"
            heading="1. Whispree"
            description="A chat app that utilizes Firebase for its authentication, database, and storage functionalities. Users can sign up for an account using zod validation, send text and images, and even customize their own UI."
            github="https://github.com/Arnav350/whispree"
            link="https://tourmaline-lokum-48d4d3.netlify.app"
            pause={pause}
          />
          <ProjectsPlanet
            color="purple"
            heading="2. Twitter-Clone"
            description="A replica of the Twitter home page. You can upload posts, reply to comments, and like the posts. The app integrates with Firebase to provide CRUD functionality. Include external APIs to fetch data for the news section."
            github="https://github.com/Arnav350/twitter-clone"
            link="https://beamish-brigadeiros-dd3b11.netlify.app"
            pause={pause}
          />
          <ProjectsPlanet
            color="green"
            heading="3. Snake Game"
            description="A snake game app that has an arcade style UI and uses canvas for the snake and the food. There are different difficulty settings that adjusts the speed of the snake and a score counter. Use WSAD or the arrow keys to move."
            github="https://github.com/Arnav350/snake"
            link="https://zingy-figolla-fc099a.netlify.app"
            pause={pause}
          />
          <ProjectsPlanet
            color="orange"
            heading="4. Google-Clone"
            description="A Google home and search page clone that leverages the power of the Google API to fetch the top 10 search results. You can enter a query into the search bar and you will receive the same results as the official engine."
            github="https://github.com/Arnav350/google-clone"
            link="https://jovial-crostata-0bd4fd.netlify.app"
            pause={pause}
          />
          <ProjectsPlanet
            color="blue"
            heading="5. Virutal Keyboard"
            description="A virtual keyboard app that can be used via touch or click, to mimic the use of a physical keyboard. The app also features caps lock and shift functionality, so you can type in all caps or access symbols and special characters."
            github="https://github.com/Arnav350/virtual-keyboard"
            link="https://willowy-sopapillas-ed16a6.netlify.app"
            pause={pause}
          />
          <ProjectsPlanet
            color="yellow"
            heading="6. Titanic Survivors"
            description="A virtual keyboard app that can be used via touch or click, to mimic the use of a physical keyboard. The app also features caps lock and shift functionality, so you can type in all caps or access symbols and special characters."
            github="https://github.com/Arnav350/titanic-survivors"
            link="https://willowy-sopapillas-ed16a6.netlify.app"
            pause={pause}
          />
          <ProjectsPlanet
            color="pink"
            heading="7. Lightweight (IP)"
            description="A virtual keyboard app that can be used via touch or click, to mimic the use of a physical keyboard. The app also features caps lock and shift functionality, so you can type in all caps or access symbols and special characters."
            github="https://github.com/Arnav350/pumppeak"
            pause={pause}
          />
        </button>
      </div>
    </section>
  );
}

export default Projects;
