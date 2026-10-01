import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const FloatingWhatsApp = () => {
  const ksaWhatsAppUrl = "https://wa.me/966598145042";
  const [isDarkBg, setIsDarkBg] = useState(true);
  const asideRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const checkBackground = () => {
      if (!asideRef.current) return;
      const rect = asideRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Top of page is always hero (dark / red gradient)
      if (window.scrollY < 200) {
        setIsDarkBg(true);
        return;
      }

      // Check near bottom (footer is dark / red)
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 450) {
        setIsDarkBg(true);
        return;
      }

      const elements = document.elementsFromPoint(x, y);
      const target = elements.find(
        (el) => el !== asideRef.current && !asideRef.current.contains(el)
      );

      if (!target) return;

      // 1. Direct check for known dark / red containers
      if (
        target.closest('footer') ||
        target.closest('.bg-radial-hero') ||
        target.closest('.bg-\\[\\#050505\\]') ||
        target.closest('.bg-\\[\\#080808\\]') ||
        target.closest('.bg-\\[\\#0a0a0a\\]') ||
        target.closest('.bg-neutral-900') ||
        target.closest('.bg-neutral-950') ||
        target.closest('.bg-black') ||
        target.closest('.bg-\\[\\#E50914\\]') ||
        target.closest('.bg-\\[\\#9F0712\\]') ||
        target.closest('[data-theme="dark"]')
      ) {
        setIsDarkBg(true);
        return;
      }

      // 2. Computed background color & luminance check
      let curr = target;
      let foundDark = false;
      while (curr && curr !== document.documentElement && curr !== document.body) {
        const style = window.getComputedStyle(curr);

        // Check background image for gradients
        const bgImg = style.backgroundImage;
        if (bgImg && bgImg !== 'none') {
          if (
            bgImg.includes('radial-hero') ||
            bgImg.includes('rgb(5, 5, 5)') ||
            bgImg.includes('rgb(159, 7, 18)') ||
            bgImg.includes('rgb(229, 9, 20)')
          ) {
            foundDark = true;
            break;
          }
        }

        // Check backgroundColor
        const bg = style.backgroundColor;
        if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
          const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);

            // Red background check (dominant red)
            const isRed = r > 160 && g < 80 && b < 80;
            // Relative luminance (standard formula)
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

            if (isRed || luminance < 140) {
              foundDark = true;
            } else {
              foundDark = false;
            }
            break;
          }
        }
        curr = curr.parentElement;
      }

      setIsDarkBg(foundDark);
    };

    checkBackground();
    const timer = setTimeout(checkBackground, 150);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkBackground();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  return (
    <aside 
      ref={asideRef}
      aria-label="Direct WhatsApp Support"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-4 2xl:right-[calc((100vw-1280px)/2-124px)] z-40 flex items-center justify-center select-none"
    >
      <a
        href={ksaWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-28 h-28"
        aria-label="Chat with Impleway KSA on WhatsApp (+966 59 814 5042)"
      >
        {/* Rotating Circular Text SVG with Dynamic Color Switching */}
        <div className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite] group-hover:animate-[spin_7s_linear_infinite] transition-all">
          <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
            <defs>
              <path
                id="circlePath"
                d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                fill="none"
              />
            </defs>
            <text 
              className="text-[9.5px] font-black tracking-[0.19em] uppercase select-none transition-all duration-300"
              style={{
                fill: isDarkBg ? '#FFFFFF' : '#E50914',
                filter: isDarkBg 
                  ? 'drop-shadow(0 1px 3px rgba(0,0,0,0.9))' 
                  : 'drop-shadow(0 1px 2px rgba(229,9,20,0.25)) drop-shadow(0 0 1px rgba(255,255,255,0.8))'
              }}
            >
              <textPath href="#circlePath" startOffset="0%">
                YOU'RE ONE CLICK AWAY FROM IMPLEWAY •{" "}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Official WhatsApp Green Icon */}
        <div className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31Z"/>
          </svg>
          
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>
        </div>

        {/* Hover Tooltip */}
        <div className="absolute -top-10 right-0 px-3 py-1 bg-black text-white text-[11px] font-bold rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-neutral-700">
          🇸🇦 KSA: +966 59 814 5042
        </div>
      </a>
    </aside>
  );
};
