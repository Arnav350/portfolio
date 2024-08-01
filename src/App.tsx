import { Canvas } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls, useProgress } from "@react-three/drei";
import Loading from "./components/Loading";
import Bloom from "./components/Bloom";

function App() {
  const { progress } = useProgress();

  return (
    <div style={{ height: "100vh", backgroundColor: "#000" }}>
      <div style={{ height: "100%", opacity: progress < 100 ? 0 : 1, transition: "opacity 300ms ease" }}>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }}>
          <ScrollControls pages={5}>
            <Scroll>
              <Bloom />
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Canvas>
      </div>
      <Loading progress={progress} />
    </div>
  );
}

export default App;
