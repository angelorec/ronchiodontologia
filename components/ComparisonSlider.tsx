import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface ComparisonSliderProps {
  imageBefore: string;
  imageAfter: string;
  altBefore: string;
  altAfter: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  imageBefore,
  imageAfter,
  altBefore,
  altAfter,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isResizing || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div
      className="w-full h-full relative rounded-[1.5rem] overflow-hidden group select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Background Image (After) */}
      <div className="absolute inset-0">
        <img src={imageAfter} alt={altAfter} className="w-full h-full object-cover" />
      </div>

      {/* Foreground Image (Before) - Clipped */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <img
          src={imageBefore}
          alt={altBefore}
          className="w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current?.offsetWidth || '100%' }}
        />
        <div className="absolute top-0 right-0 h-full w-0.5 bg-white z-30"></div>
      </div>

      {/* Labels */}
      <div className="absolute top-5 right-5 bg-rose-gold/85 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm z-10 pointer-events-none">
        Depois
      </div>
      <div className="absolute top-5 left-5 bg-rose-gold/85 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm z-30 pointer-events-none">
        Antes
      </div>

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -ml-[22px] w-[44px] h-[44px] bg-rose-gold rounded-full border-[3px] border-white flex items-center justify-center shadow-lg z-40 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <ChevronsLeftRight size={20} className="text-white" />
      </div>

      {/* Input Range for Interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        onTouchStart={() => setIsResizing(true)}
        onTouchEnd={() => setIsResizing(false)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-50 m-0 p-0"
      />
    </div>
  );
};

export default ComparisonSlider;