"use client";

import Link from "next/link";
import { AccessibilityBar } from "./AccessibilityBar";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Menu } from "lucide-react";

export const Header = () => {
  const { settings } = useAccessibility();

  const navClasses = `py-4 ${
    settings.contrast === "high"
      ? "bg-black text-yellow-400 border-b-2 border-yellow-400"
      : "bg-blue-700 text-white"
  }`;

  return (
    <header>
      <AccessibilityBar />
      <nav className={navClasses}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:underline">
            Turismo Paraguay
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="#destinos" className="hover:underline">
              Destinos
            </Link>
            <Link href="#cultura" className="hover:underline">
              Cultura
            </Link>
            <Link href="/registro" className="hover:underline">
              Registro
            </Link>
            <Link href="#accesibilidad" className="hover:underline">
              Accesibilidad
            </Link>
          </div>

          <button className="md:hidden" aria-label="Menú">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};
