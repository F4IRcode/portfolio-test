import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Kelvin F4IR. Todos os direitos reservados.
    </footer>
  );
}
