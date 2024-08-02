import { Canvas } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls, useProgress } from "@react-three/drei";
import Loading from "./components/Loading";
import Bloom from "./components/Bloom";
import "./App.css";
import { useState } from "react";
import ScrollBar from "./components/ScrollBar";

function App() {
  const { progress } = useProgress();
  const [scrollTop, setScrollTop] = useState<number>(0);

  return (
    <div style={{ height: "100vh", backgroundColor: "#000" }}>
      <Loading />
      <div style={{ height: "100%", opacity: progress < 100 ? 0 : 1, transition: "opacity 300ms ease" }}>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }}>
          <ScrollControls pages={5} damping={0.1}>
            <Scroll>
              <Bloom setScrollTop={setScrollTop} />
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Canvas>
      </div>
      <ScrollBar scrollTop={scrollTop} />
    </div>
  );
}

export default App;
