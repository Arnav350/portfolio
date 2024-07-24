import { memo, useEffect, useState } from "react";
import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { Text, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useSpring, animated } from "@react-spring/three";
import Screen from "./Screen";

useGLTF.preload("../src/assets/computer/scene.gltf");

function Computer() {
  const gltf = useLoader(GLTFLoader, "../src/assets/computer/scene.gltf");
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [arrowState, setArrowState] = useState({
    hoveredLeft: false,
    hoveredRight: false,
    activeLeft: false,
    activeRight: false,
  });
  const [flash, setFlash] = useState(false);

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

  const { scaleLeft } = useSpring({
    scaleLeft: arrowState.activeLeft ? 0.9 : arrowState.hoveredLeft ? 1.15 : 1,
    config: { tension: 2000, friction: 50 },
  });
  const { scaleRight } = useSpring({
    scaleRight: arrowState.activeRight ? 0.9 : arrowState.hoveredRight ? 1.15 : 1,
    config: { tension: 2000, friction: 50 },
  });

  return (
    <animated.mesh position={[0, -120, 0]} rotation-y={rotation}>
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
        <Screen screen={currentScreen} />
        <animated.mesh
          position={[-11, 1, -2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={scaleLeft}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
            setArrowState((prev) => ({ ...prev, hoveredLeft: true }));
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
            setArrowState((prev) => ({ ...prev, hoveredLeft: false, activeLeft: false }));
          }}
          onPointerDown={() => setArrowState((prev) => ({ ...prev, activeLeft: true }))}
          onPointerUp={() => {
            setArrowState((prev) => ({ ...prev, activeLeft: false }));
            setCurrentScreen((prev) => (prev + 2) % 3);
          }}
        >
          <Text fontSize={8} color={flash ? "#1fff1f" : "#fff"} lineHeight={0.9}>
            ⇦
          </Text>
        </animated.mesh>
        <animated.mesh
          position={[-11, 1, -10]}
          rotation={[0, Math.PI / 2, 0]}
          scale={scaleRight}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
            setArrowState((prev) => ({ ...prev, hoveredRight: true }));
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
            setArrowState((prev) => ({ ...prev, hoveredRight: false, activeRight: false }));
          }}
          onPointerDown={() => setArrowState((prev) => ({ ...prev, activeRight: true }))}
          onPointerUp={() => {
            setArrowState((prev) => ({ ...prev, activeRight: false }));
            setCurrentScreen((prev) => (prev + 1) % 3);
          }}
        >
          <Text fontSize={8} color={flash ? "#1fff1f" : "#fff"} lineHeight={0.9}>
            ⇨
          </Text>
        </animated.mesh>
        <animated.mesh position={[-11, 1.3, 14]} rotation={[0, Math.PI / 2, 0]}>
          <Text fontSize={4}>{currentScreen === 0 ? "◎" : "○"}</Text>
        </animated.mesh>
        <animated.mesh position={[-11, 1.3, 10]} rotation={[0, Math.PI / 2, 0]}>
          <Text fontSize={4}>{currentScreen === 1 ? "◎" : "○"}</Text>
        </animated.mesh>
        <animated.mesh position={[-11, 1.3, 6]} rotation={[0, Math.PI / 2, 0]}>
          <Text fontSize={4}>{currentScreen === 2 ? "◎" : "○"}</Text>
        </animated.mesh>
      </mesh>
    </animated.mesh>
  );
}

export default memo(Computer);
