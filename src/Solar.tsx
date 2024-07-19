import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { memo, useEffect, useRef, useState } from "react";
import { Group, TextureLoader, Vector2 } from "three";
import { EffectComposer, RenderPass, UnrealBloomPass } from "three/examples/jsm/Addons.js";
import Planet from "./Planet";

function Solar() {
  const { scene, camera, gl, size } = useThree();

  const playIcon = useLoader(TextureLoader, "src/assets/play.svg");
  const pauseIcon = useLoader(TextureLoader, "src/assets/pause.svg");
  const composerRef = useRef<EffectComposer>();
  const groupRef = useRef<Group>(null);
  const iconRef = useRef(null);

  const [orbiting, setOrbiting] = useState<boolean>(true);

  useFrame((__, delta) => {
    if (groupRef.current) {
      if (orbiting) {
        groupRef.current.rotation.y -= delta / 5;
      }
    }

    if (composerRef.current) {
      composerRef.current.render();
    }
  }, 1);

  useEffect(() => {
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new Vector2(size.width, size.height), 1.5, 0.4, 0.85);

    composerRef.current = new EffectComposer(gl);
    composerRef.current.addPass(renderScene);
    composerRef.current.addPass(bloomPass);

    gl.setSize(size.width, size.height);
    composerRef.current.setSize(size.width, size.height);
  }, [scene, camera, gl, size]);

  return (
    <mesh>
      <pointLight decay={0} intensity={0.8} />
      <ambientLight intensity={0.5} />
      <mesh
        position={[0, 0, 0]}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
        onClick={() => setOrbiting((prevOrbiting) => !prevOrbiting)}
      >
        <sphereGeometry args={[8, 16, 16]} />
        <meshStandardMaterial color={0xffd700} emissive={0xffd700} emissiveIntensity={1.1} />
        <mesh
          scale={16}
          position={[8, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          onClick={() => setOrbiting((prevOrbiting) => !prevOrbiting)}
          ref={iconRef}
        >
          <planeGeometry args={[0.5, 0.5]} />
          <meshBasicMaterial map={orbiting ? pauseIcon : playIcon} transparent />
        </mesh>
      </mesh>
      <group ref={groupRef}>
        <Planet
          position={[5, 0, -15]}
          title="1. Whispree"
          description="A React chat app that utilizes Firebase for its authentication, database, and storage functionalities. Users can sign up for an account using zod validation, send text and images, and even customize their own UI."
          image={1}
          github="https://github.com/Arnav350/whispree"
          website="https://whispree-ap.netlify.app/"
          orbiting={orbiting}
        />
        <Planet
          position={[-13, 0, -9.5]}
          title="2. Spotify-Wrapped"
          description="A spotify wrapped app, developed in Android Studio using Java. Users link their spotify account and will recieve a list of their top artists, genres, and songs wiht music playing in the background."
          image={2}
          github="https://github.com/Arnav350/spotify-wrapped"
          website="https://github.com/Arnav350/spotify-wrapped"
          orbiting={orbiting}
        />
        <Planet
          position={[-13, 0, 9.5]}
          title="3. Titanic Survivors"
          description="A prediction modeling app that leverages sklearn and pandas to estimate survivability chances on the Titanic based on specific choices. Frontend created through Streamlit."
          image={3}
          github="https://github.com/Arnav350/titanic-survivors"
          website="https://titanic-survivors.streamlit.app/"
          orbiting={orbiting}
        />
        <Planet
          position={[5, 0, 15]}
          title="4. Snake Game"
          description="A snake game app built in react that has an arcade style UI and uses canvas for the snake and the food. There are different difficulty settings and a score counter. Use WSAD or the arrow keys to move."
          image={4}
          github="https://github.com/Arnav350/snake"
          website="https://snake-ap.netlify.app"
          orbiting={orbiting}
        />
        <Planet
          position={[16, 0, 0]}
          title="5. More"
          description="To see more of my projects including a fitness social media app, twitter-clone, connections builder, and more visit my github page."
          image={5}
          github="https://github.com/Arnav350"
          website="https://github.com/Arnav350"
          orbiting={orbiting}
        />
      </group>
    </mesh>
  );
}

export default memo(Solar);
