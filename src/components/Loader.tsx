import { useEffect, useState } from "react";
import wheelImage from "@/assets/wheel.png";

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        // Variable speed for more natural feel
        const increment = Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-parchment pattern-mandala transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-gold" />
      
      {/* Title */}
      <div className="absolute top-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-maroon tracking-wider">
          महाभारत
        </h1>
        <p className="font-display text-lg md:text-xl text-bronze mt-2 tracking-widest uppercase">
          The Great Epic
        </p>
      </div>

      {/* Wheel track area */}
      <div className="relative w-full max-w-4xl h-48 flex items-center px-8 md:px-16">
        {/* Track line */}
        <div className="absolute left-8 right-8 md:left-16 md:right-16 h-1 bg-sandalwood/50 rounded-full">
          <div 
            className="h-full bg-gradient-gold rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Animated wheel */}
        <div
          className="absolute transition-all duration-100 ease-linear"
          style={{
            left: `calc(${progress}% - ${progress * 0.5}px)`,
            transform: `translateX(-50%)`,
          }}
        >
          <img
            src={wheelImage}
            alt="Dharma Chakra"
            className="w-24 h-24 md:w-32 md:h-32 animate-wheel-spin drop-shadow-lg"
            style={{
              filter: "drop-shadow(0 4px 12px hsl(43 85% 50% / 0.4))",
            }}
          />
        </div>
      </div>

      {/* Progress text */}
      <div className="absolute bottom-16 text-center">
        <div className="font-display text-5xl md:text-6xl font-bold text-maroon tabular-nums">
          {Math.round(progress)}%
        </div>
        <p className="font-body text-lg text-muted-foreground mt-2 italic">
          Preparing the chronicles of Kurukshetra...
        </p>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-gold" />

      {/* Decorative corner ornaments */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-gold opacity-50" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-gold opacity-50" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-gold opacity-50" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-gold opacity-50" />
    </div>
  );
};

export default Loader;
