import React, { useState, useEffect } from 'react';
import { 
  Accessibility, X, RotateCcw, ZoomIn, ZoomOut, 
  Sun, Moon, Eye, Type, MousePointer, Sparkles, 
  Pause, Check, Link as LinkIcon, Sliders, Contrast
} from 'lucide-react';

const DEFAULT_SETTINGS = {
  fontSize: 100, // percentage: 90, 100, 110, 120, 130
  contrast: 'default', // 'default' | 'contrast-dark' | 'contrast-light' | 'invert'
  greyscale: false,
  highlightLinks: false,
  dyslexicFont: false,
  textSpacing: false,
  bigCursor: false,
  reduceMotion: false,
};

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
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

    // Contrast modes
    html.classList.remove('a11y-contrast-dark', 'a11y-contrast-light', 'a11y-invert');
    if (settings.contrast !== 'default') {
      html.classList.add(`a11y-${settings.contrast}`);
    }

    // Greyscale
    if (settings.greyscale) {
      html.classList.add('a11y-greyscale');
    } else {
      html.classList.remove('a11y-greyscale');
    }

    // Highlight links
    if (settings.highlightLinks) {
      html.classList.add('a11y-highlight-links');
    } else {
      html.classList.remove('a11y-highlight-links');
    }

    // Dyslexic font
    if (settings.dyslexicFont) {
      html.classList.add('a11y-dyslexic-font');
    } else {
      html.classList.remove('a11y-dyslexic-font');
    }

    // Text & line spacing
    if (settings.textSpacing) {
      html.classList.add('a11y-text-spacing');
    } else {
      html.classList.remove('a11y-text-spacing');
    }

    // Big cursor
    if (settings.bigCursor) {
      html.classList.add('a11y-big-cursor');
    } else {
      html.classList.remove('a11y-big-cursor');
    }

    // Reduce motion
    if (settings.reduceMotion) {
      html.classList.add('a11y-reduce-motion');
    } else {
      html.classList.remove('a11y-reduce-motion');
    }
  }, [settings]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Count active non-default customizations
  const activeCount = 
    (settings.fontSize !== 100 ? 1 : 0) +
    (settings.contrast !== 'default' ? 1 : 0) +
    (settings.greyscale ? 1 : 0) +
    (settings.highlightLinks ? 1 : 0) +
    (settings.dyslexicFont ? 1 : 0) +
    (settings.textSpacing ? 1 : 0) +
    (settings.bigCursor ? 1 : 0) +
    (settings.reduceMotion ? 1 : 0);

  const resetAll = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const changeFontSize = (delta) => {
    setSettings(prev => {
      const next = Math.min(140, Math.max(80, prev.fontSize + delta));
      return { ...prev, fontSize: next };
    });
  };

  return (
    <>
      {/* Floating Trigger Button (Positioned directly ABOVE the Company Profile button on bottom-left) */}
      <aside 
        aria-label="Website Accessibility Menu"
        className="fixed bottom-[88px] sm:bottom-[102px] left-6 z-40 select-none flex items-center"
      >
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#262626] text-white shadow-2xl shadow-black/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 ${
            activeCount > 0 ? 'border-[#E50914] ring-2 ring-red-500/40' : 'border-white'
          } cursor-pointer`}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="Open Accessibility Tools Menu"
          title="Accessibility Tools (Contrast, Greyscale, Font Size)"
        >
          {/* Subtle pulse ring if active adjustments are enabled */}
          {activeCount > 0 && (
            <span className="absolute -inset-1 rounded-full bg-red-500 opacity-30 animate-ping pointer-events-none"></span>
          )}

          {/* Center Content: Icon + Label */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <Accessibility className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#E50914] transition-colors duration-200" />
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight text-white leading-none mt-0.5">
              Access
            </span>
          </div>

          {/* Active Customizations Count Badge */}
          {activeCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#E50914] text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-white shadow-md">
              {activeCount}
            </span>
          )}

          {/* Hover Tooltip on Right */}
          <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#050505] text-white text-xs font-bold rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-neutral-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse"></span>
            <span>Accessibility Settings</span>
            {activeCount > 0 && <span className="text-red-400 text-[10px]">({activeCount} Active)</span>}
          </div>
        </button>
      </aside>

      {/* Accessibility Panel / Modal */}
      {isOpen && (
        <div id="a11y-widget-root">
          {/* Mobile backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 sm:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Settings Card */}
          <div 
            role="dialog"
            aria-modal="true"
            aria-label="Accessibility Options"
            className="fixed bottom-4 sm:bottom-28 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[410px] max-h-[85vh] sm:max-h-[600px] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-neutral-200/80 p-5 sm:p-6 text-[#111111] animate-in fade-in slide-in-from-bottom-4 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                  <Accessibility className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#111111] tracking-tight flex items-center gap-1.5">
                    Accessibility Menu
                    {activeCount > 0 && (
                      <span className="text-[10px] bg-red-100 text-[#E50914] px-2 py-0.5 rounded-full font-bold">
                        {activeCount} Active
                      </span>
                    )}
                  </h3>
                  <p className="text-[11px] text-neutral-500 font-medium">Custom visual & reading preferences</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close accessibility menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Controls Body */}
            <div className="space-y-5">
              
              {/* 1. Text Size (Font Size Kam / Zada) */}
              <div className="bg-neutral-50 rounded-2xl p-3.5 border border-neutral-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#111111]">
                    <Type className="w-4 h-4 text-[#E50914]" />
                    <span>Font Size (Kam / Zada)</span>
                  </div>
                  <span className="text-xs font-extrabold text-[#E50914] bg-white px-2 py-0.5 rounded-lg border border-neutral-200">
                    {settings.fontSize}%
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: '90%', val: 90 },
                    { label: '100%', val: 100 },
                    { label: '115%', val: 115 },
                    { label: '130%', val: 130 },
                  ].map(item => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => updateSetting('fontSize', item.val)}
                      className={`py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        settings.fontSize === item.val
                          ? 'bg-[#E50914] text-white border-[#E50914] shadow-sm'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Fine-tuning +/- buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => changeFontSize(-5)}
                    disabled={settings.fontSize <= 80}
                    className="flex-1 py-1.5 text-xs font-semibold rounded-xl bg-white border border-neutral-200 hover:bg-neutral-100 flex items-center justify-center gap-1 disabled:opacity-40 cursor-pointer"
                  >
                    <ZoomOut className="w-3.5 h-3.5 text-neutral-600" />
                    <span>Smaller (A-)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateSetting('fontSize', 100)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-white border border-neutral-200 hover:bg-neutral-100 cursor-pointer text-neutral-600"
                  >
                    Reset (A)
                  </button>
                  <button
                    type="button"
                    onClick={() => changeFontSize(5)}
                    disabled={settings.fontSize >= 140}
                    className="flex-1 py-1.5 text-xs font-semibold rounded-xl bg-white border border-neutral-200 hover:bg-neutral-100 flex items-center justify-center gap-1 disabled:opacity-40 cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-neutral-600" />
                    <span>Larger (A+)</span>
                  </button>
                </div>
              </div>

              {/* 2. Color & Contrast Modes */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#111111] flex items-center gap-1.5">
                  <Contrast className="w-4 h-4 text-[#E50914]" />
                  <span>Display & Contrast Mode</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  
                  {/* Default / Normal */}
                  <button
                    type="button"
                    onClick={() => {
                      updateSetting('contrast', 'default');
                      updateSetting('greyscale', false);
                    }}
                    className={`p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.contrast === 'default' && !settings.greyscale
                        ? 'bg-red-50/50 border-[#E50914] text-[#111111] shadow-sm font-bold'
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white border border-neutral-300 shadow-inner flex items-center justify-center">
                        <Sun className="w-2.5 h-2.5 text-amber-500" />
                      </div>
                      <span className="text-xs">Default Mode</span>
                    </div>
                    {settings.contrast === 'default' && !settings.greyscale && (
                      <Check className="w-3.5 h-3.5 text-[#E50914]" />
                    )}
                  </button>

                  {/* Greyscale Mode */}
                  <button
                    type="button"
                    onClick={() => {
                      updateSetting('greyscale', !settings.greyscale);
                      if (settings.contrast === 'invert') updateSetting('contrast', 'default');
                    }}
                    className={`p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.greyscale
                        ? 'bg-neutral-900 border-neutral-900 text-white shadow-sm font-bold'
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-700"></div>
                      <span className="text-xs">Greyscale (B&W)</span>
                    </div>
                    {settings.greyscale && (
                      <Check className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>

                  {/* High Contrast Dark */}
                  <button
                    type="button"
                    onClick={() => {
                      updateSetting('contrast', settings.contrast === 'contrast-dark' ? 'default' : 'contrast-dark');
                    }}
                    className={`p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.contrast === 'contrast-dark'
                        ? 'bg-black border-black text-yellow-300 shadow-sm font-bold'
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-black border border-yellow-400"></div>
                      <span className="text-xs">Contrast Dark</span>
                    </div>
                    {settings.contrast === 'contrast-dark' && (
                      <Check className="w-3.5 h-3.5 text-yellow-300" />
                    )}
                  </button>

                  {/* High Contrast Light */}
                  <button
                    type="button"
                    onClick={() => {
                      updateSetting('contrast', settings.contrast === 'contrast-light' ? 'default' : 'contrast-light');
                    }}
                    className={`p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.contrast === 'contrast-light'
                        ? 'bg-yellow-50 border-yellow-500 text-neutral-900 shadow-sm font-bold'
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-black"></div>
                      <span className="text-xs">Contrast Light</span>
                    </div>
                    {settings.contrast === 'contrast-light' && (
                      <Check className="w-3.5 h-3.5 text-black" />
                    )}
                  </button>

                  {/* Invert Colors */}
                  <button
                    type="button"
                    onClick={() => {
                      updateSetting('contrast', settings.contrast === 'invert' ? 'default' : 'invert');
                    }}
                    className={`col-span-2 p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.contrast === 'invert'
                        ? 'bg-indigo-900 border-indigo-700 text-white shadow-sm font-bold'
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4 text-indigo-500" />
                      <span className="text-xs">Invert Colors (Negative Mode)</span>
                    </div>
                    {settings.contrast === 'invert' && (
                      <Check className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>

                </div>
              </div>

              {/* 3. Reading & Usability Enhancers */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#111111] flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#E50914]" />
                  <span>Reading & Navigation Tools</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  
                  {/* Highlight Links */}
                  <button
                    type="button"
                    onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)}
                    className={`p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.highlightLinks 
                        ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold' 
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <LinkIcon className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-xs">Highlight Links</span>
                    </div>
                    {settings.highlightLinks && <Check className="w-3.5 h-3.5 text-amber-600" />}
                  </button>

                  {/* Dyslexic / Readable Font */}
                  <button
                    type="button"
                    onClick={() => updateSetting('dyslexicFont', !settings.dyslexicFont)}
                    className={`p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.dyslexicFont 
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold font-mono' 
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Type className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-xs">Readable Font</span>
                    </div>
                    {settings.dyslexicFont && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>

                  {/* Relaxed Text Spacing */}
                  <button
                    type="button"
                    onClick={() => updateSetting('textSpacing', !settings.textSpacing)}
                    className={`p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.textSpacing 
                        ? 'bg-blue-50 border-blue-400 text-blue-950 font-bold' 
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs">Text Spacing</span>
                    </div>
                    {settings.textSpacing && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>

                  {/* Big Cursor */}
                  <button
                    type="button"
                    onClick={() => updateSetting('bigCursor', !settings.bigCursor)}
                    className={`p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.bigCursor 
                        ? 'bg-purple-50 border-purple-400 text-purple-950 font-bold' 
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <MousePointer className="w-3.5 h-3.5 text-purple-600" />
                      <span className="text-xs">Big Cursor</span>
                    </div>
                    {settings.bigCursor && <Check className="w-3.5 h-3.5 text-purple-600" />}
                  </button>

                  {/* Pause Animations */}
                  <button
                    type="button"
                    onClick={() => updateSetting('reduceMotion', !settings.reduceMotion)}
                    className={`col-span-2 p-2.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings.reduceMotion 
                        ? 'bg-rose-50 border-rose-400 text-rose-950 font-bold' 
                        : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Pause className="w-3.5 h-3.5 text-rose-600" />
                      <span className="text-xs">Pause Animations & Effects</span>
                    </div>
                    {settings.reduceMotion && <Check className="w-3.5 h-3.5 text-rose-600" />}
                  </button>

                </div>
              </div>

            </div>

            {/* Footer Actions */}
            <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={resetAll}
                disabled={activeCount === 0}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-neutral-600 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-neutral-600 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Defaults</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#111111] text-white hover:bg-[#E50914] transition-colors cursor-pointer shadow-sm"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
