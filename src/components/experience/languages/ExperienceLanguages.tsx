import language_bem from "../../../assets/language_bem.png";
import language_bootstrap from "../../../assets/language_bootstrap.png";
import language_c from "../../../assets/language_c.png";
import language_css from "../../../assets/language_css.png";
import language_git from "../../../assets/language_git.png";
import language_html from "../../../assets/language_html.png";
import language_java from "../../../assets/language_java.png";
import language_js from "../../../assets/language_js.png";
import language_json from "../../../assets/language_json.png";
import language_node from "../../../assets/language_node.png";
import language_npm from "../../../assets/language_npm.png";
import language_python from "../../../assets/language_python.png";
import language_react from "../../../assets/language_react.png";
import language_redux from "../../../assets/language_redux.png";
import language_sass from "../../../assets/language_sass.png";
import language_ts from "../../../assets/language_ts.png";
import "../../../App.css";
import "./ExperienceLanguages.css";

interface IProps {
  direction: "left" | "right";
}

function ExperienceLanguages(props: IProps) {
  return (
    <div className="experience__container">
      <div className="experience__background"></div>
      <div className="experience__conveyor">
        <div className="experience__start shadow">
          <div className="experience__red"></div>
          <div className="experience__green"></div>
        </div>
        <div className={`experience--languages ${props.direction}`}>
          <figure className="experience__language">
            <img src={language_css} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_java} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_json} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_git} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_npm} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_sass} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_python} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_react} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_node} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_html} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_js} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_bem} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_redux} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_bootstrap} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_ts} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_c} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_css} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_java} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_json} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_git} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_npm} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_sass} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_python} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_react} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_node} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_html} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_js} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_bem} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_redux} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_bootstrap} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_ts} alt="" />
          </figure>
          <figure className="experience__language">
            <img src={language_c} alt="" />
          </figure>
        </div>
        <div className="experience__end shadow">
          <div className="experience__red"></div>
          <div className="experience__green"></div>
        </div>
      </div>
      <div className="experience__background"></div>
    </div>
  );
}

export default ExperienceLanguages;
