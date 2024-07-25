import { memo, useRef } from "react";
import { PointLight } from "three";
import { useFrame } from "@react-three/fiber";
import Ball from "./Ball";

function Balls() {
  const lightRef = useRef<PointLight>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta;

    if (lightRef.current) {
      lightRef.current.position.y = Math.sin(timeRef.current) * 8;
      lightRef.current.position.z = Math.cos(timeRef.current) * 12;
    }
  });

  return (
    <group position={[0, -140, 0]}>
      <pointLight ref={lightRef} position={[10, -2, 0]} intensity={300} />
      <group position={[0, 7, 0]}>
        <Ball image="c" position={[0, 0, -20]} initialScale={3} />
        <Ball image="python" position={[0, 0, -10]} initialScale={3} />
        <Ball image="java" position={[0, 0, 0]} initialScale={3} />
        <Ball image="mongo" position={[0, 0, 10]} initialScale={3} />
        <Ball image="aws" position={[0, 0, 20]} initialScale={3} />
      </group>
      <group position={[0, -3, 0]}>
        <Ball image="express" position={[0, 0, -20]} initialScale={3} />
        <Ball image="ts" position={[0, 0, -10]} initialScale={3} />
        <Ball image="react" position={[0, 0, 0]} initialScale={3} />
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
    </group>
  );
}

export default memo(Balls);
