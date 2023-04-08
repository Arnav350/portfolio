import "./Texts.css";

function Texts() {
  return (
    <div className="intro--texts container">
      <div className="intro__text">
        <h1 className="intro__title hidden">Hello,</h1>
        <h1 className="intro__title hidden">
          <span className="secondary">I'm Arnav</span>
        </h1>
        <h3 className="intro__sub hidden">
          I am a <b className="secondary">frontend</b> software developer based
          in the United States, specializing in the creation of{" "}
          <b className="secondary">remarkable</b> online journies!
        </h3>
        <h3 className="intro__sub hidden">
          Interested in working together? Let's have a{" "}
          <b className="secondary">talk.</b>
        </h3>
      </div>
    </div>
  );
}

export default Texts;
