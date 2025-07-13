"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";

export const Footer = () => {
  const { settings } = useAccessibility();

  const footerClasses = `py-8 ${
    settings.contrast === "high"
      ? "bg-black text-yellow-400 border-t-2 border-yellow-400"
      : "bg-gradient-to-r from-blue-900 to-blue-600 text-white border-t-2 border-blue-200"
  }`;

  return (
    <footer className={footerClasses}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h3 className="text-lg font-bold mb-4">Turismo Paraguay</h3>
            <p>Descubre la belleza de nuestro país</p>
          </div>
          <div className="flex flex-col md:items-end md:text-right">
            <h3 className="text-lg font-bold mb-4">Contactos</h3>
            <p>Juan Garcete - juancagarcete@gmail.com</p>
            <p>Matias Barrientos - matias07barrientos@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-blue-300 text-center">
          <p>
            © {new Date().getFullYear()} Turismo Paraguay
          </p>
        </div>
      </div>
    </footer>
  );
};
