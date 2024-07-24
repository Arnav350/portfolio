import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import Bloom from "./Bloom";

const Intro = lazy(() => import("./Intro"));
const Solar = lazy(() => import("./Solar"));
const Computer = lazy(() => import("./Computer"));
const Balls = lazy(() => import("./Balls"));
const Ufo = lazy(() => import("./Ufo"));

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }}>
          <ScrollControls pages={9} damping={0} distance={1}>
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
