import { memo, useEffect, useRef, useState } from "react";
import { Mesh, TextureLoader } from "three";
import { Decal, Text } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

type Props = {
  position: [number, number, number];
  title: string;
  description: string;
  image: number;
  github: string;
  website: string;
  orbiting: boolean;
};

const radius = 4;

function Planet({ title, description, image, github, website, orbiting, position }: Props) {
  const texture = useLoader(TextureLoader, `src/assets/planet${image}.jpg`);
  const githubIcon = useLoader(TextureLoader, "src/assets/github.svg");
  const linkIcon = useLoader(TextureLoader, "src/assets/link.svg");
  const projectImage = useLoader(TextureLoader, `src/assets/project${image}.png`);

  const meshRef = useRef<Mesh>(null);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...position);
    }
  }, [position]);

  useFrame((__, delta) => {
    if (meshRef.current && orbiting) {
      meshRef.current.rotation.y -= delta * -0.2;
    }
  });

  const { scale } = useSpring({
    scale: hovered ? 2 : 1,
    config: { tension: 320, friction: 20 },
  });

  return (
    <animated.mesh
      ref={meshRef}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
      scale={scale}
    >
      {hovered ? (
        <boxGeometry args={[radius * 2, radius * 2, radius * 2]} />
      ) : (
        <sphereGeometry args={[radius, 24, 24]} />
      )}
      <meshStandardMaterial map={texture} />
      <Text
        position={[radius + 0.1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.6}
        color="#aaa"
        textAlign="center"
        fillOpacity={hovered ? 0 : 1}
      >
        {title}
      </Text>
      <Text
        position={[radius + 0.1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        maxWidth={6}
        fontSize={0.4}
        color="#999"
        textAlign="center"
        fillOpacity={hovered ? 1 : 0}
      >
        {description}
      </Text>
      <mesh
        position={[radius + 0.1, -2.4, 0.5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.5}
        onClick={() => window.open(github, "_blank")}
      >
        <planeGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial map={githubIcon} transparent opacity={hovered ? 1 : 0} color="#ddd" />
      </mesh>
      <mesh
        position={[radius + 0.1, -2.4, -0.5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.5}
        onClick={() => window.open(website, "_blank")}
      >
        <planeGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial map={linkIcon} transparent opacity={hovered ? 1 : 0} color="#ddd" />
      </mesh>
      {hovered && (
        <Decal position={[radius, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={8} map={projectImage} depthTest />
      )}
    </animated.mesh>
  );
}

export default memo(Planet);
