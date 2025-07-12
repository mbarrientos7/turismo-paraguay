'use client';

import { useAccessibility } from '@/contexts/AccessibilityContext';

export const TextResizer = () => {
  const { settings, updateSettings } = useAccessibility();
  
  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => updateSettings({ fontSize: 'normal' })}
        aria-label="Tamaño normal"
        className={`px-2 py-1 rounded ${settings.fontSize === 'normal' ? 'bg-blue-600' : 'bg-gray-600'}`}
      >
        A
      </button>
      <button 
        onClick={() => updateSettings({ fontSize: 'large' })}
        aria-label="Tamaño grande"
        className={`px-2 py-1 text-lg rounded ${settings.fontSize === 'large' ? 'bg-blue-600' : 'bg-gray-600'}`}
      >
        A
      </button>
    </div>
  );
};