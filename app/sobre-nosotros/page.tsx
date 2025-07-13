"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import Image from "next/image";

export default function SobreNosotros() {
  const { settings } = useAccessibility();
  return (
    <div
      className={`${
        settings.contrast === "high"
          ? "bg-black"
          : "bg-gradient-to-b from-blue-50 to-blue-100"
      } min-h-screen flex items-center justify-center`}
      style={{ fontSize: settings.fontSize }}
    >
      <main
        className={`max-w-2xl w-full py-10 px-4 rounded-lg shadow-lg border ${
          settings.contrast === "high"
            ? "bg-black border-yellow-400"
            : "bg-white border-blue-100"
        }`}
      >
        <h1
          className={`font-bold mb-4 ${
            settings.contrast === "high" ? "text-yellow-400" : "text-blue-800"
          }`}
        >
          Sobre nosotros
        </h1>
        <div className="mb-6">
          <p
            className={`mb-4 ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-900"
            }`}
          >
            Somos un equipo apasionado por mostrar la belleza y cultura de
            Paraguay. Nuestro objetivo es brindar información accesible y útil
            para todos los viajeros y curiosos sobre nuestro país.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/profe.jpg"
            alt="Equipo de Turismo Paraguay"
            width={250}
            height={250}
            className={`rounded shadow-lg max-w-xs border ${
              settings.contrast === "high"
                ? "border-yellow-400"
                : "border-blue-200"
            }`}
          />
        </div>
        <p
          className={`font-bold ${
            settings.contrast === "high"
              ? "text-yellow-300 text-center mt-4"
              : "text-blue-700 text-center mt-4"
          }`}
        >
          {" "}
          ¡Gracias por visitarnos!
        </p>
      </main>
    </div>
  );
}
