import React from "react";
import { PixelCard } from "reactbits/components/pixel-card";

const socials = [
  { title: "GitHub", link: "https://github.com/F4IR" },
  { title: "LinkedIn", link: "https://linkedin.com/in/seu-usuario" },
];

export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl mb-10">Minhas redes</h2>
      <div className="flex justify-center gap-6">
        {socials.map((s, i) => (
          <PixelCard key={i} title={s.title} link={s.link} />
        ))}
      </div>
    </section>
  );
}
