"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FontSize = "normal" | "large" | "xlarge";
type ContrastMode = "default" | "high";

interface AccessibilitySettings {
  fontSize: FontSize;
  contrast: ContrastMode;
}

const AccessibilityContext = createContext<
  | {
      settings: AccessibilitySettings;
      updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
    }
  | undefined
>(undefined);

export const AccessibilityProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("accessibilitySettings");
      return saved
        ? JSON.parse(saved)
        : { fontSize: "normal", contrast: "default" };
    }
    return { fontSize: "normal", contrast: "default" };
  });

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem("accessibilitySettings", JSON.stringify(updated));
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility debe usarse dentro de AccessibilityProvider"
    );
  }
  return context;
};
