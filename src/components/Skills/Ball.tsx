import { TextureLoader } from "three";
import { Decal, Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { memo, useState } from "react";
import { animated, useSpring } from "@react-spring/three";

type Props = {
  image: string;
  position: [number, number, number];
  initialScale: number;
};

function Ball({ image, position, initialScale }: Props) {
  const texture = useLoader(TextureLoader, `../../../public/assets/languages/language_${image}.png`);

  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.5 * initialScale : initialScale,
    config: { tension: 1000, friction: 40 },
  });

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      position={position}
      rotation={[0, Math.PI / 2, 0]}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      <animated.mesh castShadow receiveShadow scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#57544f" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} map={texture} scale={1.3} />
      </animated.mesh>
    </Float>
  );
}

export default memo(Ball);
