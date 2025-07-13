"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Eye } from "lucide-react";

export const ContrastToggle = () => {
  const { settings, updateSettings } = useAccessibility();

  return (
    <button
      onClick={() =>
        updateSettings({
          contrast: settings.contrast === "default" ? "high" : "default",
        })
      }
      aria-label={`Modo ${
        settings.contrast === "default" ? "alto contraste" : "contraste normal"
      }`}
      className={`p-1 rounded transition-colors duration-200 ${
        settings.contrast === "high"
          ? "bg-yellow-400 text-black"
          : "bg-gray-600 text-white hover:bg-gray-500"
      }`}
    >
      <Eye className="h-5 w-5" />
    </button>
  );
};
