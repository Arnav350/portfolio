import { lazy, memo, useEffect, useRef } from "react";
import { Vector2 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, RenderPass, UnrealBloomPass } from "three/examples/jsm/Addons.js";

const Intro = lazy(() => import("./Intro"));
const Solar = lazy(() => import("./Solar"));
const Computer = lazy(() => import("./Computer"));
const Balls = lazy(() => import("./Balls"));
const Ufo = lazy(() => import("./Ufo"));

function Bloom() {
  const { scene, camera, gl, size } = useThree();

  const composerRef = useRef<EffectComposer>();

  useEffect(() => {
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new Vector2(size.width, size.height), 1.5, 0.4, 0.85);

    bloomPass.threshold = 0.2;

    composerRef.current = new EffectComposer(gl);
    composerRef.current.addPass(renderScene);
    composerRef.current.addPass(bloomPass);

    gl.setSize(size.width, size.height);
    composerRef.current.setSize(size.width, size.height);
  }, [scene, camera, gl, size]);

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }
  }, 1);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <Intro />
      <Solar />
      <Computer />
      <Balls />
      <Ufo />
    </group>
  );
}

export default memo(Bloom);
