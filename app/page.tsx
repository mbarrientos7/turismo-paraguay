"use client";

import { DestinosSection } from "@/components/DestinosSection";
import { CulturaSection } from "@/components/CulturaSection";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useEffect } from "react";

export default function Home() {
  const { settings } = useAccessibility();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div style={{ fontSize: settings.fontSize }}>
      <section
        className={`py-12 ${
          settings.contrast === "high"
            ? "bg-black"
            : "bg-gradient-to-b from-blue-100 to-blue-300"
        }`}
      >
        <div
          className={`container mx-auto px-4 text-center p-8 rounded shadow ${
            settings.contrast === "high"
              ? "bg-black text-yellow-400"
              : "bg-white bg-opacity-80 text-blue-900"
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-800"
            }`}
          >
            Descubre el Paraguay
          </h2>
          <p
            className={`mb-8 ${
              settings.contrast === "high" ? "text-yellow-300" : ""
            }`}
          >
            Explora los tesoros naturales y culturales de nuestro país
          </p>
        </div>
      </section>

      <DestinosSection />
      <section id="cultura" className="scroll-mt-28">
        <CulturaSection />
      </section>

      <section
        id="accesibilidad"
        className={`scroll-mt-28 py-12 ${
          settings.contrast === "high" ? "bg-black" : "bg-blue-50"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`font-bold mb-6 ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-800"
            }`}
          >
            Configuración de Accesibilidad
          </h2>
          <p
            className={`mb-4 ${
              settings.contrast === "high" ? "text-yellow-300" : "text-blue-900"
            }`}
          >
            Nuestro sitio está adaptado para todos los usuarios. Prueba nuestras
            herramientas:
          </p>
          <ul
            className={`list-disc pl-6 space-y-2 ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-900"
            }`}
          >
            <li>Cambiar tamaño de texto</li>
            <li>Modo alto contraste</li>
            <li>Navegación por teclado</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
