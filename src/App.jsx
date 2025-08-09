import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CurvedLoop } from "reactbits/text-animations/curved-loop";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Hero />
      <Projects />
      <Contact />
      <div className="flex justify-center py-10">
        <CurvedLoop text="Obrigado por visitar meu portfólio" radius={120} speed={1} />
      </div>
      <Footer />
    </div>
  );
}
