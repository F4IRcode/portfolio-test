import React from "react";
import { MetaBalls } from "reactbits/animations/meta-balls";
import { AsciiText } from "reactbits/text-animations/ascii-text";
import { DecryptedText } from "reactbits/text-animations/decrypted-text";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <MetaBalls color="#00ff88" />
      <div className="relative z-10 text-center">
        <AsciiText text="Kelvin F4IR" speed={50} />
        <div className="mt-4 text-lg">
          <DecryptedText text="Back-End Dev & Front-End Learner" />
        </div>
      </div>
    </section>
  );
}
