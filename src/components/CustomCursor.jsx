import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth <= 768) return;
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, .project-item, .gallery-item, .skill-tag, .filter-btn').forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverListeners();
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible || window.innerWidth <= 768) return null;

  return (
    <div
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99999] transition-transform duration-75 linear"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transition-all duration-200 ease-out ${
          isHovered ? 'scale-[1.4] drop-shadow([0_2px_12px_rgba(0,71,255,0.7)])' : 'drop-shadow([0_2px_6px_rgba(0,71,255,0.4)])'
        } ${isClicked ? 'scale-[0.8]' : ''}`}
      >
        <rect x="1" y="1" width="30" height="30" rx="4" fill="#1A1814" stroke="#0047FF" strokeWidth="1.5" />
        <text x="6" y="22" fontFamily="monospace" fontSize="14" fill="#0047FF" fontWeight="bold">&lt;/&gt;</text>
      </svg>
    </div>
  );
}