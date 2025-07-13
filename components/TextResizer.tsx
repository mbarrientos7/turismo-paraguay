"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Plus, Minus } from "lucide-react";

export const TextResizer = () => {
  const { settings, updateSettings } = useAccessibility();

  const minFont = 12;
  const maxFont = 32;

  const getFontLabel = (size: number) => {
    if (size <= 14) return "Pequeño";
    if (size <= 18) return "Normal";
    if (size <= 24) return "Grande";
    return "Muy grande";
  };
  return (
    <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-3 py-1 shadow border border-blue-200">
      <button
        onClick={() =>
          updateSettings({ fontSize: Math.max(settings.fontSize - 2, minFont) })
        }
        aria-label="Disminuir tamaño de texto"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-700 border border-blue-200 hover:bg-blue-100 transition disabled:opacity-50"
        disabled={settings.fontSize <= minFont}
      >
        <Minus size={18} />
      </button>
      <span
        className="px-2 font-bold text-blue-800 select-none"
        style={{ minWidth: 32, textAlign: "center" }}
      >
        {getFontLabel(settings.fontSize)}
      </span>
      <button
        onClick={() =>
          updateSettings({ fontSize: Math.min(settings.fontSize + 2, maxFont) })
        }
        aria-label="Aumentar tamaño de texto"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-700 border border-blue-200 hover:bg-blue-100 transition disabled:opacity-50"
        disabled={settings.fontSize >= maxFont}
      >
        <Plus size={18} />
      </button>
    </div>
  );
};
