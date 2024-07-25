import { memo, useEffect, useState } from "react";
import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useSpring, animated } from "@react-spring/three";
import Screen from "./Screen";

type TArrowState = {
  hoveredLeft: boolean;
  hoveredRight: boolean;
  activeLeft: boolean;
  activeRight: boolean;
};

useGLTF.preload("../src/assets/computer/scene.gltf");

function Computer() {
  const gltf = useLoader(GLTFLoader, "../src/assets/computer/scene.gltf");
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [arrowState, setArrowState] = useState<TArrowState>({
    hoveredLeft: false,
    hoveredRight: false,
    activeLeft: false,
    activeRight: false,
  });
  const [flash, setFlash] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash((prev) => !prev);
      setTimeout(() => setFlash((prev) => !prev), 150);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material.metalness = 0.7;
        child.material.roughness = 0.2;
        if (child.name === "Cube003_Mouse_0") {
          child.visible = false;
        }
      }
    });
  }, [gltf]);

  const { rotation } = useSpring({
    rotation: arrowState.activeLeft ? Math.PI / 4 : arrowState.activeRight ? -Math.PI / 4 : 0,
    config: { tension: 30, friction: 15 },
  });

  return (
    <animated.mesh position={[0, -95, 0]} rotation-y={rotation}>
      <mesh rotation={[0, 0, Math.PI / 26]}>
        <rectAreaLight
          width={30}
          height={20}
          color={"#1fff1f"}
          intensity={10}
          position={[-9, 10, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <rectAreaLight
          width={30}
          height={15}
          color={"#1fff1f"}
          intensity={5}
          position={[-9, 10, 0]}
          rotation={[0, (3 * Math.PI) / 2, 0]}
        />
      </mesh>
      <mesh position={[-30, -18, 0]} rotation={[0, Math.PI / 2, 0]} scale={20}>
        <primitive object={gltf.scene} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 26]}>
        <Screen
          screen={currentScreen}
          setScreen={setCurrentScreen}
          arrowState={arrowState}
          setArrowState={setArrowState}
          flash={flash}
        />
      </mesh>
    </animated.mesh>
  );
}

export default memo(Computer);
