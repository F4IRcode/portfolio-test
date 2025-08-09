import React from "react";
import { Cubes } from "reactbits/animations/cubes";
import { ScrollStack } from "reactbits/components/scroll-stack";
import { ScrollReveal } from "reactbits/text-animations/scroll-reveal";
import { ShapeBlur } from "reactbits/animations/shape-blur";

const projects = [
  { title: "GitHub Wrapped", desc: "Resumo anual do GitHub" },
  { title: "Mini Souls-like", desc: "Jogo 3D feito na Godot" },
  { title: "MMORPG BIOS", desc: "MMO com menu BIOS fake" },
];

export default function Projects() {
  return (
    <section className="relative py-20">
      <Cubes className="absolute inset-0 opacity-20" />
      <div className="relative z-10 container mx-auto px-4">
        <ScrollStack>
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="bg-gray-900 rounded-lg p-6 mb-8 shadow-lg">
                <h3 className="text-2xl mb-2">{p.title}</h3>
                <p className="mb-4">{p.desc}</p>
                <ShapeBlur>
                  <button className="px-4 py-2 bg-green-500 text-black font-bold rounded">
                    Ver mais
                  </button>
                </ShapeBlur>
              </div>
            </ScrollReveal>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
