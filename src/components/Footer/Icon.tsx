import { Dispatch, SetStateAction } from "react";
import { TextureLoader } from "three";
import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";

type TProps = {
  hovered: string;
  setHovered: Dispatch<SetStateAction<string>>;
  xPos: number;
  name: string;
  link: string;
  email: boolean;
};

function Icon({ hovered, setHovered, xPos, name, link, email }: TProps) {
  const icon = useLoader(TextureLoader, `/assets/${name}.svg`);

  const { yPos } = useSpring({
    yPos: hovered == name ? 0.2 : 0,
    config: { tension: 500, friction: 20 },
  });

  return (
    <animated.mesh
      position-x={xPos}
      position-y={yPos}
      onClick={email ? () => navigator.clipboard.writeText(link) : () => window.open(link, "_blank")}
      onPointerOver={() => {
        document.body.style.cursor = email ? "copy" : "pointer";
        setHovered(name);
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
        setHovered("");
      }}
    >
      <Text color={"#f8f8f8"} scale={3}>
        ◯
      </Text>
      <animated.mesh scale={4} position={[0, 0.4, 0]}>
        <planeGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial map={icon} />
      </animated.mesh>
    </animated.mesh>
  );
}

export default Icon;
