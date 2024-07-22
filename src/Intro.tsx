import { Billboard, Text } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { memo, useEffect, useRef } from "react";
import { Mesh, Vector2 } from "three";
import { EffectComposer, RenderPass, UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// 4 large debree
// 6 all small debree
// 8 cables
// 10 cable connectors
// 12 front circle outer
// 14 back circle outer
// 16 front circle inner
// 18 back circle innter

function Intro() {
  const { scene, camera, gl, size } = useThree();

  const gltf = useLoader(GLTFLoader, "../src/assets/station/scene.gltf");
  const composerRef = useRef<EffectComposer>();

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        if (["Object_4", "Object_6", "Object_8", "Object_10"].includes(child.name)) {
          // child.material.transparent = true;
          // child.material.opacity = 0.5;
          child.visible = false;
        }
      }
    });
  }, [gltf]);

  useEffect(() => {
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new Vector2(size.width, size.height), 1.5, 0.4, 0.85);

    bloomPass.threshold = 0.1;

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
  }, 1);

  return (
    <mesh>
      <pointLight position={[14, 0, 0]} intensity={1000} color="#adf" />
      <mesh position={[0, 0, 0]} rotation={[0, 0.5, Math.PI / 2.5]} scale={6}>
        <primitive object={gltf.scene} />
      </mesh>
      <Billboard position={[0, 6, 0]}>
        <Text position={[-3.9, 0, 0]} fontSize={4}>
          Hello,
        </Text>
        <Text position={[-0.2, -4, 0]} fontSize={4} color="#d1405f">
          I'm Arnav
        </Text>
        <group position={[1, -10, 0]}>
          <Text position={[-8.5, 3, 0]}>I am a</Text>
          <Text position={[-2.5, 3, 0]} color="#d1405f">
            software engineer
          </Text>
          <Text position={[5, 3, 0]}>based in the</Text>
          <Text position={[-2, 1.5, 0]}>united States, currently a junior at</Text>
          <Text position={[-7, 0, 0]} color="#d1405f">
            Georgia Tech
          </Text>
          <Text position={[-0.4, 0, 0]}>, specializing in</Text>
          <Text position={[5.5, 0, 0]} color="#d1405f">
            full stack
          </Text>
          <Text position={[-9.1, -1.5, 0]}>and</Text>
          <Text position={[-3.8, -1.5, 0]} color="#d1405f">
            machine learning
          </Text>
          <Text position={[3.6, -1.5, 0]}>interested in</Text>
          <Text position={[-2.5, -3, 0]}>working toegether? Lets' have a</Text>
          <Text position={[6.2, -3, 0]} color="#d1405f">
            talk.
          </Text>
        </group>
      </Billboard>
    </mesh>
  );
}

export default memo(Intro);
