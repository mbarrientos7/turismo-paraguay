"use client";

import { DestinosSection } from '@/components/DestinosSection';
import { CulturaSection } from '@/components/CulturaSection';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function Home() {
  const { settings } = useAccessibility();

  const textSizeClass = {
    normal: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  }[settings.fontSize];

  return (
    <div className={`${textSizeClass}`}>
      <section className="py-12 bg-cover bg-center" style={{backgroundImage: "url('/paraguay-bg.jpg')"}}>
        <div className="container mx-auto px-4 text-center text-white bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-4xl font-bold mb-4">Descubre Paraguay</h1>
          <p className="mb-8">Explora los tesoros naturales y culturales de nuestro país</p>
        </div>
      </section>

      <DestinosSection />
      <CulturaSection />

      <section id="accesibilidad" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Configuración de Accesibilidad</h2>
          <p className="mb-4">
            Nuestro sitio está adaptado para todos los usuarios. Prueba nuestras herramientas:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cambiar tamaño de texto</li>
            <li>Modo alto contraste</li>
            <li>Navegación por teclado</li>
          </ul>
        </div>
      </section>
    </div>
  );
}