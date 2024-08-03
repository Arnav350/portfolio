type TProps = {
  scrollTop: number;
};

function ScrollBar({ scrollTop }: TProps) {
  return (
    <div style={{ position: "absolute", top: 0, right: 0, height: "100%", width: 17, backgroundColor: "#222" }}>
      <div
        style={{
          position: "absolute",
          top: scrollTop,
          right: 3,
          height: window.innerHeight / 10,
          width: 11,
          backgroundColor: "#444",
          borderRadius: 5,
        }}
      />
    </div>
  );
}

export default ScrollBar;
