import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import Loading from "./components/Loading";
import Bloom from "./components/Bloom";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [60, 0, 0], fov: 45 }}>
          <ScrollControls pages={5}>
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
