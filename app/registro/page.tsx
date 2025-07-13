"use client";

import { RegisterForm } from "@/components/RegisterForm";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export default function RegistroPage() {
  const { settings } = useAccessibility();
  return (
    <main className={`container mx-auto py-8 px-4 rounded-lg shadow-lg border ${settings.contrast === "high" ? "bg-black border-yellow-400" : "bg-white border-blue-100"}`}>
      <RegisterForm />
    </main>
  );
}
