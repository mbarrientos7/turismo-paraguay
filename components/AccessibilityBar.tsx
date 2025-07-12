"use client";

import { TextResizer } from "./TextResizer";
import { ContrastToggle } from "./ContrastToggle";

export const AccessibilityBar = () => {
  return (
    <div className="bg-gray-800 text-white p-2 flex justify-end space-x-4">
      <TextResizer />
      <ContrastToggle />
    </div>
  );
};
