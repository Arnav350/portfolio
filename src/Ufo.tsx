import { memo, useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";

const speed = 0.15;

function Ufo() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [beamHovered, setBeamHovered] = useState<boolean>(false);
  const [activeLight, setActiveLight] = useState<number>(0);
  const [hovered, setHovered] = useState<string>("");
  const [focused, setFocused] = useState<string>("");

  let timeAccumulator = 0;

  useFrame((__, delta) => {
    timeAccumulator += delta;
    if (timeAccumulator >= speed) {
      setActiveLight((prev) => (prev + 1) % 9);
      timeAccumulator = 0;
    }
  });

  const { intensity } = useSpring({
    intensity: beamHovered ? 1.8 : 0.8,
    config: { tension: 15, friction: 50 },
  });

  function handleInput(event: React.FormEvent<HTMLTextAreaElement>) {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight + 4}px`;
  }

  return (
    <group position={[0, -240, 0]}>
      <pointLight position={[0, 0, 0]} intensity={80} />
      <mesh position={[0, 12, 0]}>
        <mesh position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={7.5}>
          <sphereGeometry args={[1, 16, 16, 0, Math.PI]} />
          <meshStandardMaterial color="#888" transparent opacity={0.3} />
        </mesh>
        <mesh position={[0, 0, 0]} scale={[15, 3, 15]}>
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0]} scale={[14.9, 14.9, 14.9]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.01, 16, 32]} />
          <meshStandardMaterial color="#999" metalness={0.4} />
        </mesh>
        {Array(16)
          .fill(null)
          .map((_, i) => (
            <mesh
              key={i}
              position={[Math.sin((i / 16) * Math.PI * 2) * 14.9, 0, Math.cos((i / 16) * Math.PI * 2) * 14.9]}
            >
              <sphereGeometry args={[0.3, 8, 8]} />
              <meshStandardMaterial emissive={0x48ff00} emissiveIntensity={activeLight === i ? 1 : 0.1} />
            </mesh>
          ))}
        <mesh
          position={[0, -10, 0]}
          scale={3}
          onPointerOver={() => setBeamHovered(true)}
          onPointerOut={() => setBeamHovered(false)}
        >
          <coneGeometry args={[4, 12, 16]} />
          <meshStandardMaterial
            color={0x48ff00}
            emissive={0x48ff00}
            emissiveIntensity={intensity.get()}
            transparent
            opacity={0.5}
          />
        </mesh>
      </mesh>
      <Html position={[0, -360, 0]}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, translate: "-50%" }}>
          <input
            type="text"
            placeholder="Name"
            style={{
              padding: 16,
              backgroundColor: "#333333dd",
              border: "none",
              borderBottom: `4px solid ${
                focused == "name" ? "#66ff6688" : hovered == "name" ? "#44aa4444" : "transparent"
              }`,
              borderRadius: 8,
              outline: "none",
              color: "#f8f8f8",
              fontSize: 16,
              transition: "border-bottom 150ms",
            }}
            onMouseEnter={() => setHovered("name")}
            onMouseLeave={() => setHovered("")}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused("")}
          />
          <input
            type="text"
            placeholder="Email"
            style={{
              width: "20em",
              padding: 16,
              backgroundColor: "#333333dd",
              border: "none",
              borderBottom: `4px solid ${
                focused == "email" ? "#66ff6688" : hovered == "email" ? "#44aa4444" : "transparent"
              }`,
              borderRadius: 8,
              outline: "none",
              color: "#f8f8f8",
              fontSize: 16,
              transition: "border-bottom 150ms",
            }}
            onMouseEnter={() => setHovered("email")}
            onMouseLeave={() => setHovered("")}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
          />
          <textarea
            ref={textareaRef}
            placeholder="Message"
            style={{
              padding: 16,
              maxHeight: 520,
              minHeight: 64,
              resize: "vertical",
              backgroundColor: "#333333dd",
              border: "none",
              borderBottom: `4px solid ${
                focused == "message" ? "#66ff6688" : hovered == "message" ? "#44aa4444" : "transparent"
              }`,
              borderRadius: 8,
              outline: "none",
              color: "#f8f8f8",
              fontSize: 16,
              transition: "border-bottom 150ms",
            }}
            onInput={handleInput}
            onMouseEnter={() => setHovered("message")}
            onMouseLeave={() => setHovered("")}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused("")}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: 16,
              backgroundColor: "#333333dd",
              border: "none",
              borderBottom: `4px solid ${
                focused == "submit" ? "#66ff6688" : hovered == "submit" ? "#44aa4444" : "transparent"
              }`,
              borderRadius: 8,
              outline: "none",
              color: "#f8f8f8",
              fontSize: 16,
              cursor: "pointer",
              transition: "border-bottom 150ms",
            }}
            onMouseEnter={() => setHovered("submit")}
            onMouseLeave={() => setHovered("")}
            onFocus={() => setFocused("submit")}
            onBlur={() => setFocused("")}
          >
            Submit
          </button>
        </div>
      </Html>
    </group>
  );
}

export default memo(Ufo);
