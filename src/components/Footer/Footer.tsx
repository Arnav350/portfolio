import { memo, useState } from "react";
import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import Icon from "./Icon";

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
  const [hovered, setHovered] = useState<string>("");

  const { yPos } = useSpring({
    yPos: hovered == "name" ? 0.2 : 0,
    config: { tension: 500, friction: 20 },
  });

  return (
    <mesh position={[0, -230, 0]} rotation={[0, Math.PI / 2, 0]}>
      <animated.mesh position-y={yPos}>
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
      </animated.mesh>
      <group position={[0, -4, 0]}>
        <Icon hovered={hovered} setHovered={setHovered} xPos={-6} name="linkedIn" link={linkedIn} email={false} />
        <Icon hovered={hovered} setHovered={setHovered} xPos={-2} name="github" link={github} email={false} />
        <Icon hovered={hovered} setHovered={setHovered} xPos={2} name="email" link={email} email={true} />
        <Icon hovered={hovered} setHovered={setHovered} xPos={6} name="resume" link={resume} email={false} />
      </group>
    </mesh>
  );
}

export default memo(Footer);
