import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { memo, useEffect, useRef, useState } from "react";
import { Plane, Vector2, Vector3 } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import "./App.css";

const speed = 0.15;

function Ufo() {
  const { scene, camera, gl, size } = useThree();

  const composerRef = useRef<EffectComposer>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [activeLight, setActiveLight] = useState(0);
  const [hovered, setHovered] = useState<string>("");
  const [focused, setFocused] = useState<string>("");

  let timeAccumulator = 0;

  useFrame((__, delta) => {
    timeAccumulator += delta;
    if (timeAccumulator >= speed) {
      setActiveLight((prev) => (prev + 1) % 9);
      timeAccumulator = 0;
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
    gl.localClippingEnabled = true;
    composerRef.current.setSize(size.width, size.height);
  }, [scene, camera, gl, size]);

  const clippingPlane = new Plane(new Vector3(0, -1, 0), 9.8);

  function handleInput(event: React.FormEvent<HTMLTextAreaElement>) {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight + 4}px`;
  }

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 0, 0]} intensity={8} decay={1} />
      <directionalLight position={[1, 1, -5]} intensity={1} color="#ffaa6b" />
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
              <meshStandardMaterial emissive={0x48ff00} emissiveIntensity={activeLight === i ? 1.5 : 0.5} />
            </mesh>
          ))}
        <mesh position={[0, -6, 0]} scale={3}>
          <coneGeometry args={[4, 16, 16]} />
          <meshStandardMaterial
            color={0x48ff00}
            emissive={0x48ff00}
            emissiveIntensity={2.63}
            transparent
            opacity={0.5}
            clippingPlanes={[clippingPlane]}
          />
        </mesh>
      </mesh>
      <Html position={[0, 4, 0]}>
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
    </>
  );
}

export default memo(Ufo);
