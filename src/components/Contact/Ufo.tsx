import { memo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import Form from "./Form";

const speed = 0.15;

function Ufo() {
  const [beamHovered, setBeamHovered] = useState<boolean>(false);
  const [activeLight, setActiveLight] = useState<number>(0);

  let timeAccumulator = 0;

  useFrame((__, delta) => {
    timeAccumulator += delta;
    if (timeAccumulator >= speed) {
      setActiveLight((prev) => (prev + 1) % 9);
      timeAccumulator = 0;
    }
  });

  const { intensity } = useSpring({
    intensity: beamHovered ? 1.8 : 0.8,
    config: { tension: 15, friction: 50 },
  });

  return (
    <group
      position={[0, -185, 0]}
      onPointerOver={() => setBeamHovered(true)}
      onPointerOut={() => setBeamHovered(false)}
    >
      <pointLight position={[0, 0, 0]} intensity={80} />
      <mesh position={[0, 12, 0]}>
        <mesh position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={7.5}>
          <sphereGeometry args={[1, 16, 16, 0, Math.PI]} />
          <meshStandardMaterial color="#888" transparent opacity={0.3} />
        </mesh>
        <mesh position={[0, 0, 0]} scale={[15, 3, 15]}>
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0]} scale={[14.9, 14.9, 14.9]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.01, 16, 32]} />
          <meshStandardMaterial color="#999" metalness={0.4} />
        </mesh>
        {Array(16)
          .fill(null)
          .map((_, i) => (
            <mesh
              key={i}
              position={[Math.sin((i / 16) * Math.PI * 2) * 14.9, 0, Math.cos((i / 16) * Math.PI * 2) * 14.9]}
            >
              <sphereGeometry args={[0.3, 8, 8]} />
              <meshStandardMaterial emissive={0x48ff00} emissiveIntensity={activeLight === i ? 1 : 0.1} />
            </mesh>
          ))}
        <mesh position={[0, -10, 0]} scale={3}>
          <coneGeometry args={[4, 12, 16]} />
          <meshStandardMaterial
            color={0x48ff00}
            emissive={0x48ff00}
            emissiveIntensity={intensity.get()}
            transparent
            opacity={0.5}
          />
        </mesh>
      </mesh>
      <Form />
    </group>
  );
}

export default memo(Ufo);
