import { Html } from "@react-three/drei";
import { useRef, useState } from "react";

function Form() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [hovered, setHovered] = useState<string>("");
  const [focused, setFocused] = useState<string>("");

  function handleInput(event: React.FormEvent<HTMLTextAreaElement>) {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight + 4}px`;
  }

  return (
    <Html position={[0, -310, 0]}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, translate: "-50%" }}>
        <input
          type="text"
          placeholder="Name"
          style={{
            padding: 16,
            backgroundColor: "#333333dd",
            border: "none",
            borderBottom: `4px solid ${
              focused == "name" ? "#66ff66cc" : hovered == "name" ? "#44aa4488" : "transparent"
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
              focused == "email" ? "#66ff66cc" : hovered == "email" ? "#44aa4488" : "transparent"
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
              focused == "message" ? "#66ff66cc" : hovered == "message" ? "#44aa4488" : "transparent"
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
              focused == "submit" ? "#66ff66cc" : hovered == "submit" ? "#44aa4488" : "transparent"
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
  );
}

export default Form;
