import { memo, useEffect, useRef, useState } from "react";
import { Group, Mesh } from "three";
import { Billboard, Text, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// 4 large debree
// 6 all small debree
// 8 cables
// 10 cable connectors
// 12 front circle outer
// 14 back circle outer
// 16 front circle inner
// 18 back circle inner

useGLTF.preload("/assets/station/scene.gltf");

function Intro() {
  const gltf = useLoader(GLTFLoader, "/assets/station/scene.gltf");
  const groupRef = useRef<Group>(null);
  const targetRotation = useRef({ y: 0, z: 0 });
  const [mouse, setMouse] = useState({ y: 0, z: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ y: event.clientX - window.innerWidth / 2, z: event.clientY - window.innerHeight / 2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        if (["Object_4", "Object_6", "Object_10"].includes(child.name)) {
          child.parent?.remove(child);
        } else if ("Object_8" === child.name) {
          child.material.transparent = true;
          child.material.opacity = 0.5;
        }
      }
    });
  }, [gltf]);

  useFrame(() => {
    if (groupRef.current) {
      const newTargetRotationY = mouse.y * 0.0005;
      const newTargetRotationZ = mouse.z * -0.0005;
      targetRotation.current.y += (newTargetRotationY - targetRotation.current.y) * 0.2;
      targetRotation.current.z += (newTargetRotationZ - targetRotation.current.z) * 0.2;

      groupRef.current.rotation.y = targetRotation.current.y;
      groupRef.current.rotation.z = targetRotation.current.z;
    }
  });

  return (
    <group ref={groupRef}>
      <pointLight position={[14, 0, 0]} intensity={1000} color="#adf" />
      <mesh position={[0, 0, 0]} rotation={[0, 0.5, Math.PI / 2.5]} scale={6}>
        <primitive object={gltf.scene} />
      </mesh>
      <Billboard position={[0, 6, 0]}>
        <Text position={[-3.9, 0, 0]} fontSize={4}>
          Hello,
        </Text>
        <Text position={[-0.2, -4, 0]} fontSize={4} color="#d1405f">
          I'm Arnav
        </Text>
        <group position={[1, -10, 0]}>
          <Text position={[-8.5, 3, 0]}>I am a</Text>
          <Text position={[-2.5, 3, 0]} color="#d1405f">
            software engineer
          </Text>
          <Text position={[5, 3, 0]}>based in the</Text>
          <Text position={[-2, 1.5, 0]}>United States, currently a junior at</Text>
          <Text position={[-7, 0, 0]} color="#d1405f">
            Georgia Tech
          </Text>
          <Text position={[-0.4, 0, 0]}>, specializing in</Text>
          <Text position={[5.5, 0, 0]} color="#d1405f">
            full stack
          </Text>
          <Text position={[-9.1, -1.5, 0]}>and</Text>
          <Text position={[-3.8, -1.5, 0]} color="#d1405f">
            machine learning
          </Text>
          <Text position={[3.5, -1.5, 0]}>! Interested in</Text>
          <Text position={[-2.8, -3, 0]}>working together? Let's have a</Text>
          <Text position={[5.6, -3, 0]} color="#d1405f">
            talk.
          </Text>
        </group>
      </Billboard>
    </group>
  );
}

export default memo(Intro);
