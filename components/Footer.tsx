"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";

export const Footer = () => {
  const { settings } = useAccessibility();

  const footerClasses = `py-8 ${
    settings.contrast === "high"
      ? "bg-black text-yellow-400 border-t-2 border-yellow-400"
      : "bg-gray-800 text-white"
  }`;

  return (
    <footer className={footerClasses}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Turismo Paraguay</h3>
            <p>Descubre la belleza de nuestro país</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#destinos" className="hover:underline">
                  Destinos
                </a>
              </li>
              <li>
                <a href="/registro" className="hover:underline">
                  Registro
                </a>
              </li>
              <li>
                <a href="#accesibilidad" className="hover:underline">
                  Accesibilidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <p>contacto@turismopy.com</p>
            <p>+595 123 456 789</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center">
          <p>
            © {new Date().getFullYear()} Turismo Paraguay - Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
