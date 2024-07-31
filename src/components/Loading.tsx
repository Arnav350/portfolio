import "../App.css";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 7,
          marginBottom: 4,
          color: "#fff",
          fontSize: 22,
        }}
      >
        <h1 style={{ marginBottom: -28, fontSize: 90, animation: "glowWhite 2s infinite" }}>Hello,</h1>
        <h1 style={{ marginBottom: -8, color: "#d1405f", fontSize: 90, animation: "glowPink 2s infinite" }}>
          I'm Arnav
        </h1>
        <h4 style={{ animation: "glowWhite 2s infinite" }}>
          I am a <span style={{ color: "#d1405f", animation: "glowPink 2s infinite" }}>software engineer</span> based in
          the
        </h4>
        <h4 style={{ animation: "glowWhite 2s infinite" }}>United States, currently a junior at</h4>
        <h4 style={{ animation: "glowWhite 2s infinite" }}>
          <span style={{ color: "#d1405f", animation: "glowPink 2s infinite" }}>Georgia Tech</span>, specializing in{" "}
          <span style={{ color: "#d1405f", animation: "glowPink 2s infinite" }}>full stack</span>
        </h4>
        <h4 style={{ animation: "glowWhite 2s infinite" }}>
          and <span style={{ color: "#d1405f", animation: "glowPink 2s infinite" }}>machine learning</span>! Interested
          in
        </h4>
        <h4 style={{ animation: "glowWhite 2s infinite" }}>
          working together? Let's have a{" "}
          <span style={{ color: "#d1405f", animation: "glowPink 2s infinite" }}>talk.</span>
        </h4>
      </div>
    </div>
  );
}

export default Loading;
