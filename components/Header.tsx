"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AccessibilityBar } from "./AccessibilityBar";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const { settings } = useAccessibility();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${hash}`);
    }
  };

  const navClasses = `py-4 ${
    settings.contrast === "high"
      ? "bg-black text-yellow-400 border-b-2 border-yellow-400"
      : "bg-blue-700 text-white"
  }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <AccessibilityBar />
      <nav className={navClasses}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className={`text-xl font-bold hover:underline ${
              settings.contrast === "high" ? "text-yellow-400" : "text-white"
            }`}
          >
            Turismo Paraguay
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link
              href="/#destinos"
              onClick={handleNav("destinos")}
              className={`hover:underline ${
                settings.contrast === "high" ? "text-yellow-400" : "text-white"
              }`}
              scroll={false}
            >
              Destinos
            </Link>
            <Link
              href="/#cultura"
              onClick={handleNav("cultura")}
              className={`hover:underline ${
                settings.contrast === "high" ? "text-yellow-400" : "text-white"
              }`}
              scroll={false}
            >
              Cultura
            </Link>
            <Link
              href="/#accesibilidad"
              onClick={handleNav("accesibilidad")}
              className={`hover:underline ${
                settings.contrast === "high" ? "text-yellow-400" : "text-white"
              }`}
              scroll={false}
            >
              Accesibilidad
            </Link>
            <Link
              href="/registro"
              className={`hover:underline ${
                settings.contrast === "high" ? "text-yellow-400" : "text-white"
              }`}
            >
              Registro
            </Link>
            <Link
              href="/sobre-nosotros"
              className={`hover:underline ${
                settings.contrast === "high" ? "text-yellow-400" : "text-white"
              }`}
            >
              Sobre nosotros
            </Link>
          </div>

          <button
            className="md:hidden"
            aria-label="Menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav
            className="w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4"
              aria-label="Cerrar menú"
              onClick={() => setMobileMenuOpen(false)}
            >
              &times;
            </button>
            <Link
              href="/#destinos"
              onClick={(e) => {
                handleNav("destinos")(e);
                setMobileMenuOpen(false);
              }}
              className="text-blue-700 font-semibold"
              scroll={false}
            >
              Destinos
            </Link>
            <Link
              href="/#cultura"
              onClick={(e) => {
                handleNav("cultura")(e);
                setMobileMenuOpen(false);
              }}
              className="text-blue-700 font-semibold"
              scroll={false}
            >
              Cultura
            </Link>
            <Link
              href="/#accesibilidad"
              onClick={(e) => {
                handleNav("accesibilidad")(e);
                setMobileMenuOpen(false);
              }}
              className="text-blue-700 font-semibold"
              scroll={false}
            >
              Accesibilidad
            </Link>
            <Link
              href="/registro"
              onClick={() => setMobileMenuOpen(false)}
              className="text-blue-700 font-semibold"
            >
              Registro
            </Link>
            <Link
              href="/sobre-nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="text-blue-700 font-semibold"
            >
              Sobre nosotros
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
