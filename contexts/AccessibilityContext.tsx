"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type FontSize = number;
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
  const [settings, setSettings] = useState<AccessibilitySettings | undefined>(
    undefined
  );

  useEffect(() => {
    setSettings({ fontSize: 16, contrast: "default" });
  }, []);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    if (!settings) return;
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (settings?.contrast === "high") {
        document.body.classList.add("high-contrast");
      } else {
        document.body.classList.remove("high-contrast");
      }
    }
  }, [settings?.contrast]);

  return (
    <AccessibilityContext.Provider
      value={{ settings: settings!, updateSettings }}
    >
      {settings ? children : null}
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
