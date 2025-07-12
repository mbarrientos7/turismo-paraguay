"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import Image from "next/image";

const DESTINOS = [
  {
    id: 1,
    nombre: "Salto del Monday",
    descripcion: "Impresionante cascada en Alto Paraná",
    imagen: "/monday.jpg",
  },
  // Agregar más destinos...
];

export const DestinosSection = () => {
  const { settings } = useAccessibility();

  return (
    <section id="destinos" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuestros Destinos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINOS.map((destino) => (
            <div
              key={destino.id}
              className={`rounded-lg overflow-hidden shadow-lg ${
                settings.contrast === "high"
                  ? "border-2 border-yellow-400"
                  : "border border-gray-200"
              }`}
            >
              <Image
                src={destino.imagen}
                alt={destino.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{destino.nombre}</h3>
                <p>{destino.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
