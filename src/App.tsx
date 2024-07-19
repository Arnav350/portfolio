import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const Intro = lazy(() => import("./Intro"));
const Solar = lazy(() => import("./Solar"));
const Computer = lazy(() => import("./Computer"));
const Balls = lazy(() => import("./Balls"));
const Ufo = lazy(() => import("./Ufo"));

function App() {
  return (
    <div style={{ overflowY: "scroll", height: "100vh" }}>
      <Suspense fallback={<div>Loading</div>}>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
          <Preload all />
          <Intro />
          <OrbitControls />
        </Canvas>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
          <Solar />
        </Canvas>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
          <Computer />
        </Canvas>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
          <Balls />
        </Canvas>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
          <Ufo />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
