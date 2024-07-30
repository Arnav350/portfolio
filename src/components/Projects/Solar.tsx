import { useFrame, useLoader } from "@react-three/fiber";
import { memo, useRef, useState } from "react";
import { Group, TextureLoader } from "three";
import Planet from "./Planet";

function Solar() {
  const playIcon = useLoader(TextureLoader, "src/assets/play.svg");
  const pauseIcon = useLoader(TextureLoader, "src/assets/pause.svg");
  const groupRef = useRef<Group>(null);
  const iconRef = useRef(null);

  const [orbiting, setOrbiting] = useState<boolean>(true);

  useFrame((__, delta) => {
    if (groupRef.current) {
      if (orbiting) {
        groupRef.current.rotation.y -= delta / 5;
      }
    }
  });

  return (
    <mesh position={[0, -40, 0]}>
      <pointLight intensity={80} />
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
          description="A chat app where users can create an account with zod validation, create rooms with users, send text and images, and customize their UI. Utilizes React and Firebase for frontend, auth, and database."
          image={1}
          github="https://github.com/Arnav350/whispree"
          website="https://whispree-ap.netlify.app/"
          orbiting={orbiting}
        />
        <Planet
          position={[-13, 0, -9.5]}
          title="2. Spotify-Wrapped"
          description="A spotify wrapped app, developed in Android Studio using Java. Users link their spotify account and will recieve a list of their top artists, genres, and songs with music playing in the background."
          image={2}
          github="https://github.com/Arnav350/spotify-wrapped"
          website="https://github.com/Arnav350/spotify-wrapped"
          orbiting={orbiting}
        />
        <Planet
          position={[-13, 0, 9.5]}
          title="3. Image Gen"
          description="A image generator that uses AI to create images with a user inputed pormpt. Users can then download or share them to the community page. Created with the MERN stack, cloudinary, and OpenAI."
          image={3}
          github="https://github.com/Arnav350/image-gen"
          website="https://imagegen-ap.netlify.app/"
          orbiting={orbiting}
        />
        <Planet
          position={[5, 0, 15]}
          title="4. Titanic Survivors"
          description="A prediction modeling app that leverages AI to estimate survivability chances on the Titanic based on specific choices. Developed using Streamlit and Sklearn for modeling and data filtering."
          image={4}
          github="https://github.com/Arnav350/titanic-survivors"
          website="https://titanic-survivors.streamlit.app/"
          orbiting={orbiting}
        />
        <Planet
          position={[16, 0, 0]}
          title="5. More"
          description="To see more of my personal projects including a fitness social media app, twitter-clone, connections builder, snake game, and more visit my github page with either of the links below."
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
