import { Float } from "@react-three/drei";
import Ball from "./Ball";
import { useFrame, useThree } from "@react-three/fiber";
import { memo, useEffect, useRef } from "react";
import { EffectComposer, RenderPass, UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { Vector2 } from "three";

function Balls() {
  const { scene, camera, gl, size } = useThree();

  const composerRef = useRef<EffectComposer>();

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }
  }, 1);

  useEffect(() => {
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new Vector2(size.width, size.height), 1.5, 0.4, 0.85);

    bloomPass.threshold = 0;
    bloomPass.strength = 1;

    composerRef.current = new EffectComposer(gl);
    composerRef.current.addPass(renderScene);
    composerRef.current.addPass(bloomPass);

    gl.setSize(size.width, size.height);
    composerRef.current.setSize(size.width, size.height);
  }, [scene, camera, gl, size]);
  return (
    <Float speed={1.75} rotationIntensity={0} floatIntensity={2}>
      <directionalLight position={[0.05, 0, 0]} intensity={1} />
      <ambientLight intensity={0.5} />
      <group position={[0, 7, 0]}>
        <Ball image="c" position={[0, 0, -20]} initialScale={3} />
        <Ball image="python" position={[0, 0, -10]} initialScale={3} />
        <Ball image="java" position={[0, 0, 0]} initialScale={3} />
        <Ball image="react" position={[0, 0, 10]} initialScale={3} />
        <Ball image="aws" position={[0, 0, 20]} initialScale={3} />
      </group>
      <group position={[0, -3, 0]}>
        <Ball image="express" position={[0, 0, -20]} initialScale={3} />
        <Ball image="ts" position={[0, 0, -10]} initialScale={3} />
        <Ball image="mongo" position={[0, 0, 0]} initialScale={3} />
        <Ball image="scikit" position={[0, 0, 10]} initialScale={3} />
        <Ball image="node" position={[0, 0, 20]} initialScale={3} />
      </group>
      <group position={[0, -10, 0]}>
        <Ball image="postgre" position={[0, 0, -20]} initialScale={1.5} />
        <Ball image="vue" position={[0, 0, -14.3]} initialScale={1.5} />
        <Ball image="android" position={[0, 0, -8.6]} initialScale={1.5} />
        <Ball image="spring" position={[0, 0, -2.8]} initialScale={1.5} />
        <Ball image="git" position={[0, 0, 2.8]} initialScale={1.5} />
        <Ball image="mysql" position={[0, 0, 8.6]} initialScale={1.5} />
        <Ball image="firebase" position={[0, 0, 14.3]} initialScale={1.5} />
        <Ball image="expo" position={[0, 0, 20]} initialScale={1.5} />
      </group>
    </Float>
  );
}

export default memo(Balls);
