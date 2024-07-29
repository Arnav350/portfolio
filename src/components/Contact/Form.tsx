import { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import emailjs from "@emailjs/browser";

function Form() {
  const formRef = useRef<HTMLFormElement>(null!);
  const nameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const messageRef = useRef<HTMLTextAreaElement>(null!);
  const [err, setErr] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [emailjsErr, setEmailjsErr] = useState<boolean>(false);
  const [hovered, setHovered] = useState<string>("");
  const [focused, setFocused] = useState<string>("");

  function handleInput(event: React.FormEvent<HTMLTextAreaElement>) {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight + 4}px`;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      nameRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === "" ||
      messageRef.current.value.trim() === ""
    ) {
      setErr(true);
    } else {
      setErr(false);

      emailjs.sendForm("service_2huaien", "template_t44cc06", formRef.current, "2hvV9SMMYfDlNPLDE").then(
        () => {
          setSent(true);
          setTimeout(() => setSent(false), 2500);
        },
        () => {
          setEmailjsErr(true);
          setTimeout(() => setEmailjsErr(false), 2500);
        }
      );

      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  }

  return (
    <Html position={[0, -250, 0]}>
      <form
        ref={formRef}
        style={{ display: "flex", flexDirection: "column", gap: 8, translate: "-50%" }}
        onSubmit={handleSubmit}
      >
        <h4
          style={{
            padding: 16,
            backgroundColor: "#ff0000bb",
            borderBottom: "4px solid transparent",
            borderRadius: 8,
            color: "#f8f8f8",
            fontSize: 16,
            fontWeight: 400,
            opacity: err ? 1 : 0,
            transition: "border-bottom 150ms, opacity 150ms",
          }}
        >
          Make sure to fill out all fields.
        </h4>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Name"
          style={{
            padding: 16,
            backgroundColor: "#333333dd",
            border: "none",
            borderBottom: `4px solid ${
              err && !nameRef.current.value.trim()
                ? "#ff0000bb"
                : focused == "name"
                ? "#66ff66cc"
                : hovered == "name"
                ? "#44aa4488"
                : "transparent"
            }`,
            borderRadius: 8,
            outline: "none",
            color: "#f8f8f8",
            fontSize: 16,
            transition: "opacity 150ms",
          }}
          onMouseEnter={() => setHovered("name")}
          onMouseLeave={() => setHovered("")}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused("")}
        />
        <input
          ref={emailRef}
          type="text"
          name="email"
          placeholder="Email"
          style={{
            width: "20em",
            padding: 16,
            backgroundColor: "#333333dd",
            border: "none",
            borderBottom: `4px solid ${
              err && !emailRef.current.value.trim()
                ? "#ff0000bb"
                : focused == "email"
                ? "#66ff66cc"
                : hovered == "email"
                ? "#44aa4488"
                : "transparent"
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
          ref={messageRef}
          name="message"
          placeholder="Message"
          style={{
            padding: 16,
            maxHeight: 520,
            minHeight: 64,
            resize: "vertical",
            backgroundColor: "#333333dd",
            border: "none",
            borderBottom: `4px solid ${
              err && !messageRef.current.value.trim()
                ? "#ff0000bb"
                : focused == "message"
                ? "#66ff66cc"
                : hovered == "message"
                ? "#44aa4488"
                : "transparent"
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
        <div
          onMouseEnter={() => setHovered("submit")}
          onMouseLeave={() => setHovered("")}
          onFocus={() => setFocused("submit")}
          onBlur={() => setFocused("")}
        >
          <input
            type="submit"
            style={{
              position: "absolute",
              zIndex: 1,
              padding: 16,
              width: "100%",
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
              opacity: sent || emailjsErr ? 0 : 1,
              transition: "border-bottom 150ms, opacity 150ms",
            }}
          />
          <h4
            style={{
              position: "absolute",
              padding: 16,
              width: "100%",
              backgroundColor: "#333333dd",
              borderRadius: 8,
              color: "#f8f8f8",
              fontSize: 16,
              fontWeight: "400",
              textAlign: "center",
              opacity: sent ? 1 : 0,
              transition: "opacity 150ms",
            }}
          >
            Message Sent
          </h4>
          <h4
            style={{
              position: "absolute",
              padding: 16,
              width: "100%",
              backgroundColor: "#ff0000bb",
              borderRadius: 8,
              color: "#f8f8f8",
              fontSize: 16,
              fontWeight: "400",
              textAlign: "center",
              opacity: emailjsErr ? 1 : 0,
              transition: "opacity 150ms",
            }}
          >
            Error! Please try again
          </h4>
        </div>
      </form>
    </Html>
  );
}

export default Form;
