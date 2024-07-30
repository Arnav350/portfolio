import { Dispatch, memo, SetStateAction } from "react";
import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import Inconsolata from "../../assets/Inconsolata.ttf";

type TArrowState = {
  hoveredLeft: boolean;
  hoveredRight: boolean;
  activeLeft: boolean;
  activeRight: boolean;
};

type TProps = {
  screen: number;
  setScreen: Dispatch<SetStateAction<number>>;
  arrowState: TArrowState;
  setArrowState: Dispatch<SetStateAction<TArrowState>>;
  flash: boolean;
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

function Screen({ screen, setScreen, arrowState, setArrowState, flash }: TProps) {
  const { scaleLeft } = useSpring({
    scaleLeft: arrowState.activeLeft ? 0.9 : arrowState.hoveredLeft ? 1.15 : 1,
    config: { tension: 2000, friction: 50 },
  });
  const { scaleRight } = useSpring({
    scaleRight: arrowState.activeRight ? 0.9 : arrowState.hoveredRight ? 1.15 : 1,
    config: { tension: 2000, friction: 50 },
  });

  return (
    <>
      <Text
        position={[-11, 17, 5]}
        rotation={[0, Math.PI / 2, 0]}
        anchorX="left"
        fontSize={2}
        font={Inconsolata}
        color="#ddd"
      >
        {screens[screen].company}
      </Text>
      <Text
        position={[-11, 15, 5]}
        rotation={[0, Math.PI / 2, 0]}
        anchorX="left"
        fontSize={1.5}
        font={Inconsolata}
        color="#ddd"
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
        color="#ddd"
        maxWidth={20}
      >
        {screens[screen].bullets}
      </Text>
      <Text
        position={[-11, 9.25 + screens[screen].heightStart, 13]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.8}
        font={Inconsolata}
        color="#ddd"
      >
        {screens[screen].dateStart}
      </Text>
      <animated.mesh position={[-11, 8 + screens[screen].heightStart / 2, 13]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, screens[screen].heightStart]} />
        <meshBasicMaterial color="#ddd" />
      </animated.mesh>
      <Text
        position={[-11, 9.25 + screens[screen].heightEnd, 9]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.8}
        font={Inconsolata}
        color="#ddd"
      >
        {screens[screen].dateEnd}
      </Text>
      <animated.mesh position={[-11, 8 + screens[screen].heightEnd / 2, 9]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, screens[screen].heightEnd]} />
        <meshBasicMaterial color="#ddd" />
      </animated.mesh>
      <animated.mesh position={[-11, 1.3, 14]} rotation={[0, Math.PI / 2, 0]}>
        <Text fontSize={4} color="#eee">
          {screen === 0 ? "◎" : "○"}
        </Text>
      </animated.mesh>
      <animated.mesh position={[-11, 1.3, 10]} rotation={[0, Math.PI / 2, 0]}>
        <Text fontSize={4} color="#eee">
          {screen === 1 ? "◎" : "○"}
        </Text>
      </animated.mesh>
      <animated.mesh position={[-11, 1.3, 6]} rotation={[0, Math.PI / 2, 0]}>
        <Text fontSize={4} color="#eee">
          {screen === 2 ? "◎" : "○"}
        </Text>
      </animated.mesh>
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
          setScreen((prev) => (prev + 2) % 3);
        }}
      >
        <Text fontSize={8} color={flash ? "#1fff1f" : "#eee"} lineHeight={0.9}>
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
          setScreen((prev) => (prev + 1) % 3);
        }}
      >
        <Text fontSize={8} color={flash ? "#1fff1f" : "#eee"} lineHeight={0.9}>
          ⇨
        </Text>
      </animated.mesh>
    </>
  );
}

export default memo(Screen);
