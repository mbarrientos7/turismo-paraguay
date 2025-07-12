"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import Image from "next/image";

export const CulturaSection = () => {
  const { settings } = useAccessibility();

  const textClasses = {
    normal: "text-base",
    large: "text-lg",
    xlarge: "text-xl",
  }[settings.fontSize];

  return (
    <section
      id="cultura"
      className={`py-12 ${
        settings.contrast === "high" ? "bg-black text-yellow-400" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Cultura Paraguaya
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={textClasses}>
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

          <div>
            <Image
              src="/cultura.jpg"
              alt="Manifestaciones culturales paraguayas"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
