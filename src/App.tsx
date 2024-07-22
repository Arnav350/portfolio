import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";

const Intro = lazy(() => import("./Intro"));
const Solar = lazy(() => import("./Solar"));
const Computer = lazy(() => import("./Computer"));
const Balls = lazy(() => import("./Balls"));
const Ufo = lazy(() => import("./Ufo"));

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }} frameloop="demand">
          <ScrollControls pages={5} damping={0} distance={1}>
            <Scroll>
              <group>
                <ambientLight intensity={0.5} />
                <Intro />
                <Solar />
                {/* <Computer /> */}
                {/* <Balls /> */}
                {/* <Ufo /> */}
              </group>
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Canvas>
      </Suspense>
    </div>

    // <div style={{ overflowY: "scroll", height: "100vh" }}>
    //   <Suspense fallback={<div>Loading</div>}>
    //     <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
    //       <Preload all />
    //       <Intro />
    //     </Canvas>
    //     <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
    //       <Solar />
    //     </Canvas>
    //     <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
    //       <Computer />
    //     </Canvas>
    //     <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
    //       <Balls />
    //     </Canvas>
    //     <Canvas camera={{ position: [60, 0, 0], fov: 45 }} style={{ height: "80vh" }}>
    //       <Ufo />
    //     </Canvas>
    //   </Suspense>
    // </div>
  );
}

export default App;
