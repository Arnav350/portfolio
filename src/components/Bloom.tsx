import { Dispatch, lazy, memo, SetStateAction, useEffect, useRef } from "react";
import { Vector2 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import resume from "../../public/assets/Arnav_Patel_Resume.pdf";

const Stars = lazy(() => import("./Stars/Stars"));
const Intro = lazy(() => import("./Intro/Intro"));
const Solar = lazy(() => import("./Projects/Solar"));
const Computer = lazy(() => import("./Experience/Computer"));
const Balls = lazy(() => import("./Skills/Balls"));
const Ufo = lazy(() => import("./Contact/Ufo"));
const Footer = lazy(() => import("./Footer/Footer"));

type TProps = {
  setScrollTop: Dispatch<SetStateAction<number>>;
};

const socials = {
  portfolio: "https://github.com/Arnav350/portfolio",
  linkedIn: "https://www.linkedin.com/in/patel-arnav",
  github: "https://github.com/Arnav350",
  email: "patelarnavm@gmail.com",
  resume: resume,
};

function Bloom({ setScrollTop }: TProps) {
  const { scene, camera, gl, size } = useThree();
  const scroll = useScroll();

  const composerRef = useRef<EffectComposer>();

  useEffect(() => {
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new Vector2(size.width, size.height), 1.5, 0.4, 0.85);

    bloomPass.threshold = 0.2;

    composerRef.current = new EffectComposer(gl);
    composerRef.current.addPass(renderScene);
    composerRef.current.addPass(bloomPass);

    gl.setSize(size.width, size.height);
    composerRef.current.setSize(size.width, size.height);
  }, [scene, camera, gl, size]);

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }

    setScrollTop(scroll.offset * ((window.innerHeight * 9) / 10 - 6) + 3);
  }, 1);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <Stars />
      <Intro />
      <Solar />
      <Computer />
      <Balls />
      <Ufo />
      <Footer socials={socials} />
    </group>
  );
}

export default memo(Bloom);
