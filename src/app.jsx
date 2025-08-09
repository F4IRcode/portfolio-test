import React from "react";
import DecryptedText from "./components/DecryptedText";
import CurvedLoop from "./components/CurvedLoop";
import MetaBalls from "./components/MetaBalls";
import ShapeBlurButton from "./components/ShapeBlurButton";

export default function App() {
  return (
    <>
      <MetaBalls />

      <CurvedLoop marqueeText="F4IR" speed={2} className="curved-loop-text" />

      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ marginBottom: "1rem" }}>
          <DecryptedText
            text="Bem-vindo ao meu portfólio"
            speed={40}
            maxIterations={15}
            sequential={true}
            revealDirection="start"
            useOriginalCharsOnly={true}
            className="decrypted"
            encryptedClassName="encrypted"
            animateOn="hover"
          />
        </h1>

        <p style={{ maxWidth: 600, margin: "auto" }}>
          Aqui você vê uns efeitos daora de texto decryptado, curva com drag e background metaballs.
        </p>

        <ShapeBlurButton onClick={() => alert("Clicou no botão!")}>
          Clique aqui
        </ShapeBlurButton>

        <div style={{ marginTop: 32 }}>
          <span className="pixel-card">
            <a href="https://github.com/F4IR" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kelvingoncalves/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </span>
        </div>
      </main>
    </>
  );
}
