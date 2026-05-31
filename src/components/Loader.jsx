import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Staggered character entrance for your name
    gsap.fromTo('.loader-char', 
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.04, ease: 'power4.out', delay: 0.2 }
    );

    // 2. Smooth reveal of operational telemetry components
    gsap.fromTo('.loader-telemetry',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.6 }
    );

    // 3. Simulated smart increment engine
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12;
        if (next >= 100) {
          clearInterval(interval);
          
          // 4. Elegant exit choreography sequence
          const tl = gsap.timeline({
            onComplete: onComplete
          });

          tl.to('.loader-char', {
            yPercent: -105,
            duration: 0.6,
            stagger: 0.02,
            ease: 'power3.in'
          })
          .to('.loader-telemetry', {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power2.in'
          }, '-=0.4')
          .to('#loader', {
            yPercent: -100,
            duration: 0.85,
            ease: 'power4.inOut'
          }, '-=0.2');

          return 100;
        }
        return next;
      });
    }, 55);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Splitting your name to map structural characters cleanly
  const nameArray = "Pavan Kumar G R".split("");

  return (
    <div 
      id="loader" 
      className="fixed inset-0 bg-[#1A1814] z-[100000] flex flex-col items-center justify-between p-12 overflow-hidden select-none"
    >
      {/* Top Section Accent Line */}
      <div className="loader-telemetry opacity-0 w-full flex justify-between items-center font-mono text-[9px] tracking-[0.3em] text-[#FAF7F2]/30 uppercase">
        <span>sys_init // v4.0.0</span>
        <span>bengaluru_in</span>
      </div>

      {/* Main Core Name Sequence Block */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="overflow-hidden py-2 flex">
          {nameArray.map((char, index) => (
            <span
              key={index}
              className="loader-char inline-block font-sans text-[clamp(32px,6vw,72px)] font-extrabold text-[#FAF7F2] tracking-tight leading-none"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
          <span className="loader-char inline-block font-sans text-[clamp(32px,6vw,72px)] font-extrabold text-[#0047FF] leading-none">.</span>
        </div>

        {/* Minimal Progress Indicator Line Container */}
        <div className="loader-telemetry opacity-0 flex items-center gap-4 mt-2">
          <div className="w-[140px] h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <div 
              className="absolute top-0 left-0 h-full bg-[#0047FF] transition-all duration-100 cubic-bezier(0.1, 0.8, 0.2, 1)" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Counter Panel */}
      <div className="loader-telemetry opacity-0 w-full flex justify-between items-end font-mono text-xs tracking-widest text-[#FAF7F2]/40">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0047FF] animate-pulse" />
          <span className="text-[10px] text-[#FAF7F2]/20 uppercase">loading assets</span>
        </div>
        <div className="text-sm font-medium tabular-nums text-[#FAF7F2]/60">
          {String(Math.floor(progress)).padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
}