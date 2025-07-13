"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useState } from "react";
import Image from "next/image";

const CULTURA_ITEMS = [
  {
    nombre: "Arte indígena y artesanías",
    descripcion:
      "El arte paraguayo destaca por sus tejidos, cerámicas y tallados en madera, reflejando la herencia guaraní.",
    imagen: "/images/arte.jpg",
  },
  {
    nombre: "Música tradicional",
    descripcion:
      "La polka paraguaya y la guarania son géneros emblemáticos, acompañados de arpa y guitarra.",
    imagen: "/images/musica.jpg",
  },
  {
    nombre: "Gastronomía única",
    descripcion:
      "Platos como la sopa paraguaya y el chipa forman parte esencial de la identidad culinaria nacional.",
    imagen: "/images/gastronomia.jpg",
  },
];

export const CulturaSection = () => {
  const { settings } = useAccessibility();

  const textClasses = {
    normal: "text-base",
    large: "text-lg",
    xlarge: "text-xl",
  }[settings.fontSize];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % CULTURA_ITEMS.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + CULTURA_ITEMS.length) % CULTURA_ITEMS.length
    );

  return (
    <section
      id="cultura"
      className={`scroll-mt-28 py-12 ${
        settings.contrast === "high"
          ? "bg-black text-yellow-400"
          : "bg-gradient-to-b from-blue-50 to-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            settings.contrast === "high" ? "text-yellow-400" : "text-blue-800"
          }`}
        >
          Cultura Paraguaya
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={
              textClasses +
              (settings.contrast === "high" ? "" : " text-blue-900")
            }
          >
            <p className="mb-4">
              Paraguay posee una rica herencia cultural que combina tradiciones
              guaraníes con influencias españolas.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Arte indígena y artesanías</li>
              <li>Música tradicional como la polka paraguaya</li>
              <li>Gastronomía única como la sopa paraguaya</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div
              className={`rounded-lg shadow-md border mb-4 ${
                settings.contrast === "high"
                  ? "border-yellow-400 bg-black"
                  : "border-blue-200 bg-white"
              }`}
              style={{ width: 320 }}
            >
              <Image
                src={CULTURA_ITEMS[current].imagen}
                alt={CULTURA_ITEMS[current].nombre}
                width={320}
                height={192}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div
                className={`p-4 ${
                  settings.contrast === "high"
                    ? "text-yellow-400"
                    : "text-blue-900"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">
                  {CULTURA_ITEMS[current].nombre}
                </h3>
                <p>{CULTURA_ITEMS[current].descripcion}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={prev}
                className={`${
                  settings.contrast === "high"
                    ? "bg-yellow-400 text-black"
                    : "bg-blue-600 text-white"
                } rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-colors`}
                aria-label="Anterior"
              >
                &#8592;
              </button>
              <button
                onClick={next}
                className={`${
                  settings.contrast === "high"
                    ? "bg-yellow-400 text-black"
                    : "bg-blue-600 text-white"
                } rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-colors`}
                aria-label="Siguiente"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
