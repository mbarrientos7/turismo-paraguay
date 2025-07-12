"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Accessibility } from "lucide-react";

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
      className="p-1 rounded bg-gray-600 hover:bg-gray-500"
    >
      <Accessibility className="h-5 w-5" />
    </button>
  );
};
