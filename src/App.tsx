import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import Bloom from "./components/Bloom";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }}>
          <ScrollControls pages={5} damping={0} distance={1}>
            <Scroll>
              <Bloom />
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
