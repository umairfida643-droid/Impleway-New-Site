import React, { useState, useEffect, useRef } from 'react';
import { Accessibility, X, RotateCcw, Type, Contrast, Check } from 'lucide-react';

const DEFAULT_SETTINGS = {
  fontSize: 100, // 90, 100, 115, 130
  greyscale: false,
  contrast: false,
};

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('impleway_a11y_settings');
      if (saved) return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_SETTINGS;
  });

  // Apply settings to DOM and localStorage
  useEffect(() => {
    try {
      localStorage.setItem('impleway_a11y_settings', JSON.stringify(settings));
    } catch (e) {
      console.error(e);
    }

    const html = document.documentElement;

    // Font size scaling
    if (settings.fontSize && settings.fontSize !== 100) {
      html.style.fontSize = `${settings.fontSize}%`;
    } else {
      html.style.fontSize = '';
    }

    // Greyscale Mode
    if (settings.greyscale) {
      html.classList.add('a11y-greyscale');
    } else {
      html.classList.remove('a11y-greyscale');
    }

    // Contrast Mode
    if (settings.contrast) {
      html.classList.add('a11y-contrast');
    } else {
      html.classList.remove('a11y-contrast');
    }
  }, [settings]);

  // Handle outside clicks to close popover
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const activeCount = 
    (settings.fontSize !== 100 ? 1 : 0) +
    (settings.greyscale ? 1 : 0) +
    (settings.contrast ? 1 : 0);

  const resetAll = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <aside 
      ref={widgetRef}
      aria-label="Accessibility Widget"
      className="fixed z-50 select-none"
    >
      {/* 1. Popover Menu (Floats DIRECTLY above the trigger button, never overlapping it) */}
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="false"
          aria-label="Accessibility Options"
          className="fixed bottom-[150px] sm:bottom-[172px] left-3 sm:left-4 2xl:left-[calc((100vw-1280px)/2-84px)] z-50 w-[300px] sm:w-[330px] bg-white rounded-3xl shadow-2xl border border-neutral-200/90 p-5 text-[#111111] animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                <Accessibility className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-sm text-[#111111]">
                Accessibility Tools
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Controls List */}
          <div className="space-y-4">
            
            {/* Font Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#111111]">
                <div className="flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-[#E50914]" />
                  <span>Font Size</span>
                </div>
                <span className="text-[11px] font-extrabold text-[#E50914] bg-neutral-100 px-2 py-0.5 rounded-md">
                  {settings.fontSize}%
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 bg-neutral-100/80 p-1 rounded-xl">
                {[
                  { label: 'A-', val: 90, title: 'Small' },
                  { label: 'A', val: 100, title: 'Default' },
                  { label: 'A+', val: 115, title: 'Large' },
                  { label: 'A++', val: 130, title: 'Extra Large' },
                ].map(item => (
                  <button
                    key={item.val}
                    type="button"
                    title={item.title}
                    onClick={() => updateSetting('fontSize', item.val)}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      settings.fontSize === item.val
                        ? 'bg-[#E50914] text-white shadow-xs'
                        : 'text-neutral-700 hover:bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contrast Mode Toggle */}
            <div>
              <button
                type="button"
                onClick={() => updateSetting('contrast', !settings.contrast)}
                className={`w-full p-3 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                  settings.contrast
                    ? 'bg-neutral-900 border-neutral-900 text-yellow-300 font-bold shadow-xs'
                    : 'bg-white border-neutral-200 text-neutral-800 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Contrast className={`w-4 h-4 ${settings.contrast ? 'text-yellow-300' : 'text-[#E50914]'}`} />
                  <span className="text-xs font-bold">Contrast Mode</span>
                </div>
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                  settings.contrast ? 'bg-yellow-400 text-black' : 'bg-neutral-100 text-neutral-500'
                }`}>
                  {settings.contrast ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>

            {/* Greyscale Mode Toggle */}
            <div>
              <button
                type="button"
                onClick={() => updateSetting('greyscale', !settings.greyscale)}
                className={`w-full p-3 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                  settings.greyscale
                    ? 'bg-neutral-900 border-neutral-900 text-white font-bold shadow-xs'
                    : 'bg-white border-neutral-200 text-neutral-800 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-700 border border-neutral-400"></div>
                  <span className="text-xs font-bold">Greyscale (B&W)</span>
                </div>
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                  settings.greyscale ? 'bg-white text-black' : 'bg-neutral-100 text-neutral-500'
                }`}>
                  {settings.greyscale ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="pt-3 mt-4 border-t border-neutral-100 flex items-center justify-between">
            <button
              type="button"
              onClick={resetAll}
              disabled={activeCount === 0}
              className="text-xs font-bold text-neutral-500 hover:text-red-600 flex items-center gap-1.5 disabled:opacity-30 disabled:hover:text-neutral-500 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All</span>
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-1.5 rounded-xl bg-[#111111] hover:bg-[#E50914] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>

        </div>
      )}

      {/* 2. Floating Trigger Button (Always fixed at bottom-left directly above Profile button) */}
      <div className="fixed bottom-[84px] sm:bottom-[100px] left-3 sm:left-4 2xl:left-[calc((100vw-1280px)/2-84px)] z-50">
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#262626] text-white shadow-2xl shadow-black/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 ${
            activeCount > 0 ? 'border-[#E50914] ring-2 ring-red-500/40' : 'border-white'
          } cursor-pointer`}
          aria-expanded={isOpen}
          aria-label="Toggle Accessibility Menu"
          title="Accessibility Tools (Contrast, Greyscale, Font Size)"
        >
          {/* Subtle pulse if active */}
          {activeCount > 0 && (
            <span className="absolute -inset-1 rounded-full bg-red-500 opacity-30 animate-ping pointer-events-none"></span>
          )}

          {/* Center Content: Icon + Label */}
          <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
            <Accessibility className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#E50914] transition-colors duration-200" />
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight text-white leading-none mt-0.5">
              Access
            </span>
          </div>

          {/* Active Badge */}
          {activeCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#E50914] text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-white shadow-md">
              {activeCount}
            </span>
          )}

          {/* Tooltip on Right */}
          <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#050505] text-white text-xs font-bold rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-neutral-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]"></span>
            <span>{isOpen ? 'Close Accessibility' : 'Accessibility Tools'}</span>
          </div>
        </button>
      </div>
    </aside>
  );
};
