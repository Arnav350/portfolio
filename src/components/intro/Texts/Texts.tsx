import "./Texts.css";

function Texts() {
  function handleClick() {
    const element = document.querySelector<HTMLDivElement>(".contact");
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="intro--texts container">
      <div className="intro__text">
        <h1 className="intro__title hidden">Hello,</h1>
        <h1 className="intro__title hidden">
          <span className="secondary">I'm Arnav</span>
        </h1>
        <h3 className="intro__sub hidden">
          I am a <b className="secondary">frontend</b> software developer based in the United States, currently
          attending <b className="secondary">Georgia Tech</b>, specializing in the creation of{" "}
          <b className="secondary">remarkable</b> online journies!
        </h3>
        <h3 className="intro__sub hidden">
          Interested in working together? Let's have a{" "}
          <b className="intro__talk secondary" onClick={handleClick}>
            talk.
          </b>
        </h3>
      </div>
    </div>
  );
}

export default Texts;
