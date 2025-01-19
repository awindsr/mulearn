import React, { useRef, useEffect, useState } from "react";

export const InfiniteImageSlider = ({ images, speed = 10, height = 200 }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 && images.length > 2);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [images]); // Added images to the dependency array

  const shouldScroll = isMobile || images.length > 7;
  
  const { containerRef, scrollPosition } = useInfiniteScroll(
    speed,
    320,
    shouldScroll
  );

  const displayImages = shouldScroll
    ? [...images, ...images, ...images, ...images, ...images]
    : images;

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div
        className={`flex items-center justify-center gap-4 ${
          shouldScroll ? "transition-transform" : ""
        }`}
        style={
          shouldScroll ? { transform: `translateX(-${scrollPosition}px)` } : {}
        }
      >
        {displayImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 h-[100px]">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const useInfiniteScroll = (speed, imageWidth, shouldScroll) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!shouldScroll || !containerRef.current) return;
    
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    
    const scroll = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + speed;
        return newPosition >= scrollWidth / 2 ? 0 : newPosition;
      });
    };

    const animationId = setInterval(scroll, 16); // ~60fps
    return () => clearInterval(animationId);
  }, [speed, imageWidth, shouldScroll]);

  return { containerRef, scrollPosition };
};