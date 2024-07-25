import { memo, useState } from "react";
import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { animated, useSpring } from "@react-spring/three";

type TProps = {
  socials: {
    portfolio: string;
    linkedIn: string;
    github: string;
    email: string;
    resume: string;
  };
};

function Footer({ socials: { portfolio, linkedIn, github, email, resume } }: TProps) {
  const githubIcon = useLoader(TextureLoader, "src/assets/github.svg");

  const [hovered, setHovered] = useState<string>("");

  const { linkedInOpacity, linkedInPosition } = useSpring({
    linkedInOpacity: hovered == linkedIn ? 0.2 : 1,
    linkedInPosition: hovered == linkedIn ? 0.2 : 0,
    config: { tension: 500, friction: 20 },
  });

  return (
    <mesh position={[0, -230, 0]} rotation={[0, Math.PI / 2, 0]}>
      <Text
        fontSize={0.8}
        onClick={() => window.open(portfolio, "_blank")}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
          setHovered("name");
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
          setHovered("");
        }}
      >
        Built by Arnav Patel
      </Text>
      <group position={[0, -4, 0]}>
        <animated.mesh
          position-x={-6}
          position-y={linkedInPosition}
          onClick={() => window.open(linkedIn, "_blank")}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
            setHovered(linkedIn);
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
            setHovered("");
          }}
        >
          <Text color={"#f8f8f8"} scale={3}>
            ◯
          </Text>
          <mesh scale={4} position={[0, 0.4, 0]}>
            <planeGeometry args={[0.5, 0.5]} />
            <meshBasicMaterial map={githubIcon} transparent />
          </mesh>
        </animated.mesh>
      </group>
    </mesh>
  );
}

export default memo(Footer);
