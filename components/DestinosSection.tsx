"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useState } from "react";
import Image from "next/image";

const DESTINOS = [
  {
    id: 1,
    nombre: "Salto del Monday",
    descripcion:
      "Impresionante cascada en Alto Paraná. Un lugar ideal para los amantes de la naturaleza y la aventura.",
    imagen: "/images/monday.jpg",
  },
  {
    id: 2,
    nombre: "Cerro Corá",
    descripcion: "Parque nacional con paisajes únicos y mucha historia.",
    imagen: "/images/cerrocora.jpg",
  },
  {
    id: 3,
    nombre: "Encarnación",
    descripcion: "La perla del sur, famosa por sus playas y su carnaval.",
    imagen: "/images/encarnacion.jpg",
  },
];

export const DestinosSection = () => {
  const { settings } = useAccessibility();
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<(typeof DESTINOS)[0] | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % DESTINOS.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + DESTINOS.length) % DESTINOS.length);

  const openModal = (destino: (typeof DESTINOS)[0]) => {
    setSelected(destino);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <section
      id="destinos"
      className={`scroll-mt-28 py-12 ${
        settings.contrast === "high"
          ? "bg-black"
          : "bg-gradient-to-b from-blue-50 to-blue-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            settings.contrast === "high" ? "text-yellow-400" : "text-blue-800"
          }`}
        >
          Nuestros Destinos
        </h2>
        <div className="flex items-center justify-center space-x-4">
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
          <div
            className={`rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${
              settings.contrast === "high"
                ? "border-2 border-yellow-400 bg-black text-yellow-400"
                : "border border-blue-200 bg-white"
            }`}
            style={{ width: 480 }}
            onClick={() => openModal(DESTINOS[current])}
            tabIndex={0}
            role="button"
            aria-pressed="false"
          >
            <Image
              src={DESTINOS[current].imagen}
              alt={DESTINOS[current].nombre}
              width={720}
              height={320}
              className="w-full h-80 object-cover"
            />
            <div
              className={`p-4 ${
                settings.contrast === "high" ? "" : "text-blue-900"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-2 ${
                  settings.contrast === "high" ? "text-yellow-400" : ""
                }`}
              >
                {DESTINOS[current].nombre}
              </h3>
              <p
                className={`${
                  settings.contrast === "high" ? "text-yellow-300" : ""
                } truncate`}
              >
                {DESTINOS[current].descripcion}
              </p>
            </div>
          </div>
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
        {showModal && selected && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div
              className={`rounded-lg shadow-lg p-8 max-w-2xl w-full relative ${
                settings.contrast === "high"
                  ? "bg-black border-2 border-yellow-400 text-yellow-400"
                  : "bg-white"
              }`}
              style={{ minWidth: 480 }}
            >
              <button
                onClick={closeModal}
                className={`absolute top-2 right-2 ${
                  settings.contrast === "high"
                    ? "text-yellow-400 hover:text-yellow-300"
                    : "text-gray-500 hover:text-gray-800"
                }`}
                aria-label="Cerrar"
              >
                &times;
              </button>
              <Image
                src={selected.imagen}
                alt={selected.nombre}
                width={720}
                height={320}
                className="w-full h-80 object-cover rounded mb-4"
              />
              <h3
                className={`text-2xl font-bold mb-2 ${
                  settings.contrast === "high"
                    ? "text-yellow-400"
                    : "text-blue-800"
                }`}
              >
                {selected.nombre}
              </h3>
              <p
                className={`${
                  settings.contrast === "high"
                    ? "text-yellow-300"
                    : "text-gray-700"
                }`}
              >
                {selected.descripcion}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
