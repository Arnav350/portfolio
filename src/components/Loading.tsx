import "../App.css";

type TProps = {
  progress: number;
};

function Loading({ progress }: TProps) {
  return (
    <div
      className="loading"
      style={{
        opacity: progress < 100 ? 1 : 0,
        pointerEvents: progress < 100 ? "all" : "none",
      }}
    >
      <div>
        <h1>Hello,</h1>
        <h2>I'm Arnav</h2>
        <h4>
          I am a <span>software engineer</span> based in the
        </h4>
        <h4>United States, currently a junior at</h4>
        <h4>
          <span>Georgia Tech</span>, specializing in <span>full stack</span>
        </h4>
        <h4>
          and <span>machine learning</span>! Interested in
        </h4>
        <h4>
          working together? Let's have a <span>talk.</span>
        </h4>
      </div>
    </div>
  );
}

export default Loading;
