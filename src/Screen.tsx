import { Text } from "@react-three/drei";
import Inconsolata from "./assets/Inconsolata.ttf";
import { animated } from "@react-spring/three";
import { memo } from "react";

type TProps = {
  screen: number;
};

const screens = [
  {
    company: "Biz4Group",
    title: "Machine Learning Intern",
    bullets:
      "> Developed the first LLM-powered chatbot for iGaming services\n> Utilized python Scikit-learn to develop solutions for prediction modeling and data interpretation",
    heightStart: 7,
    heightEnd: 8,
    dateStart: "Jun 2023",
    dateEnd: "Aug 2023",
  },
  {
    company: "Biz4Group",
    title: "Frontend Developer Intern",
    bullets:
      "> Built frontend and databases of million-dollar E-commerce platforms with React and PostgreSQL\n> Used ads and SEO to increase client's brand awareness and online conversions\n> Optimized code to decrease website loading time by up to 40%",
    heightStart: 6,
    heightEnd: 5,
    dateStart: "Aug 2022",
    dateEnd: "Jan 2023",
  },
  {
    company: "Orange Tech College",
    title: "Robotics Intern",
    bullets:
      "> Used computer vision AI to create autonomous robots\n> High-pressure 4-week program, exceeding 10-hour workdays\n> Worked on product lifestyle steps including CADing, construction, programming, and presenting",
    heightStart: 4,
    heightEnd: 4,
    dateStart: "Jun 2022",
    dateEnd: "Jul 2022",
  },
];

function Screen({ screen }: TProps) {
  return (
    <>
      <Text
        position={[-11, 17, 5]}
        rotation={[0, Math.PI / 2, 0]}
        anchorX="left"
        fontSize={2}
        font={Inconsolata}
        color="#fff"
      >
        {screens[screen].company}
      </Text>
      <Text
        position={[-11, 15, 5]}
        rotation={[0, Math.PI / 2, 0]}
        anchorX="left"
        fontSize={1.5}
        font={Inconsolata}
        color="#fff"
      >
        {screens[screen].title}
      </Text>
      <Text
        position={[-11, 13, 5]}
        rotation={[0, Math.PI / 2, 0]}
        anchorX="left"
        anchorY="top"
        fontSize={1}
        font={Inconsolata}
        color="#fff"
        maxWidth={20}
      >
        {screens[screen].bullets}
      </Text>
      <Text
        position={[-11, 9.25 + screens[screen].heightStart, 13]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.8}
        font={Inconsolata}
        color="#fff"
      >
        {screens[screen].dateStart}
      </Text>
      <animated.mesh position={[-11, 8 + screens[screen].heightStart / 2, 13]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, screens[screen].heightStart]} />
      </animated.mesh>
      <Text
        position={[-11, 9.25 + screens[screen].heightEnd, 9]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.8}
        font={Inconsolata}
        color="#fff"
      >
        {screens[screen].dateEnd}
      </Text>
      <animated.mesh position={[-11, 8 + screens[screen].heightEnd / 2, 9]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, screens[screen].heightEnd]} />
      </animated.mesh>
    </>
  );
}

export default memo(Screen);
