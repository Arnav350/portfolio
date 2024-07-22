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

type CharacterProps = {
  char: string;
  position: [number, number, number];
  rotation: [number, number, number];
};

const radius = 4;
const descriptionMaxChars = 30;
const descriptionLineHeight = 0.5;

function Planet({ title, description, image, github, website, orbiting, position }: Props) {
  const texture = useLoader(TextureLoader, `src/assets/planet${image}.jpg`);
  const githubIcon = useLoader(TextureLoader, "src/assets/github.svg");
  const linkIcon = useLoader(TextureLoader, "src/assets/link.svg");

  const test = useLoader(TextureLoader, `src/assets/project${image}.png`);

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
    scale: hovered ? 3 : 1,
    config: { tension: 320, friction: 20 },
  });

  const titleArr = title.split("").reverse();
  const angleOffset = (titleArr.length * 0.4) / radius;
  const characters: CharacterProps[] = titleArr.map((char, i) => {
    const angle = -angleOffset / 2 + i * (angleOffset / (titleArr.length - 1));
    return {
      char,
      position: [radius * Math.cos(angle), 0, radius * Math.sin(angle)],
      rotation: [0, -angle + Math.PI / 2, 0],
    };
  });

  const words = description.split(" ");
  const descriptionLines: string[] = [];
  let line = "";
  for (let word of words) {
    if ((line + " " + word).length > descriptionMaxChars) {
      descriptionLines.push(line.trim());
      line = word;
    } else {
      line += " " + word;
    }
  }
  if (line) descriptionLines.push(line.trim());

  const verticalOffset = (descriptionLines.length * descriptionLineHeight) / 2 - descriptionLineHeight / 2;
  const descriptionCharacters: CharacterProps[][] = descriptionLines.map((line, lineIndex) => {
    const lineArr = line.split("").reverse();
    const lineTotalWidth = lineArr.length * 0.15;
    const lineAngleOffset = lineTotalWidth / radius;
    const lineCharacters: CharacterProps[] = lineArr.map((char, i) => {
      const angle = -lineAngleOffset / 2 + i * (lineAngleOffset / (lineArr.length - 1));
      return {
        char,
        position: [
          (radius + 0.1) * Math.cos(angle),
          verticalOffset - lineIndex * descriptionLineHeight,
          (radius + 0.1) * Math.sin(angle),
        ],
        rotation: [0, -angle + Math.PI / 2, 0],
      };
    });
    return lineCharacters;
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
      <sphereGeometry args={[radius, 24, 24]} />
      <meshStandardMaterial map={texture} />
      {/* {characters.map(({ char, position, rotation }, i) => (
        <Text
          key={i}
          font="/src/assets/AnonymousPro.ttf"
          fillOpacity={hovered ? 0 : 1}
          position={position}
          rotation={rotation}
          color="#eeeeee"
          fontSize={0.8}
        >
          {char}
        </Text>
      ))}
      <mesh position={[0, descriptionLineHeight / 2, 0]}>
        {descriptionCharacters.flatMap((line, lineIndex) =>
          line.map(({ char, position, rotation }, charIndex) => (
            <Text
              key={lineIndex + "-" + charIndex}
              font="/src/assets/AnonymousPro.ttf"
              fillOpacity={hovered ? 1 : 0}
              position={position}
              rotation={rotation}
              color="#eeeeee"
              fontSize={0.3}
            >
              {char}
            </Text>
          ))
        )}
        <mesh
          position={[radius, verticalOffset - descriptionLines.length * descriptionLineHeight, 0.35]}
          rotation={[0, Math.PI / 2, 0]}
          onClick={() => window.open(github, "_blank")}
        >
          <planeGeometry args={[0.5, 0.5]} />
          <meshBasicMaterial map={githubIcon} transparent opacity={hovered ? 1 : 0} />
        </mesh>
        <mesh
          position={[radius, verticalOffset - descriptionLines.length * descriptionLineHeight, -0.35]}
          rotation={[0, Math.PI / 2, 0]}
          onClick={() => window.open(website, "_blank")}
        >
          <planeGeometry args={[0.5, 0.5]} />
          <meshBasicMaterial map={linkIcon} transparent opacity={hovered ? 1 : 0} />
        </mesh>
      </mesh> */}
      {hovered && <Decal position={[radius, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={8.1} map={test} depthTest />}
    </animated.mesh>
  );
}

export default memo(Planet);
