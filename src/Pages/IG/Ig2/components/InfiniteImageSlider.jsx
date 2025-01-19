import React, { useRef, useEffect, useState } from "react";

export const InfiniteImageSlider = ({ images, speed = 10, height = 200 }) => {
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900 && images.length > 2);
    };
   
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [images]);

  const shouldScroll = isMobile || images.length > 7;
 
  const { containerRef, translateX } = useInfiniteScroll(
    speed,
    320,
    shouldScroll,
    images.length
  );

  // Create three sets of images for smooth infinite scrolling
  const displayImages = shouldScroll
    ? [...images, ...images, ...images]
    : images;

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div
        className={`flex items-center justify-center gap-4 ${
          shouldScroll ? "transition-transform duration-500" : ""
        }`}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: shouldScroll ? 'transform 0.1s linear' : 'none'
        }}
      >
        {displayImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 h-[100px]">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-contain h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const useInfiniteScroll = (speed, imageWidth, shouldScroll, imageCount) => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!shouldScroll || !containerRef.current) return;

    const totalWidth = imageWidth * imageCount + (imageCount * 16); // Width + gap
    let currentTranslate = 0;

    const animate = () => {
      currentTranslate -= speed;
      
      // Reset position when we've scrolled one full set of images
      if (Math.abs(currentTranslate) >= totalWidth) {
        currentTranslate = 0;
      }

      setTranslateX(currentTranslate);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, imageWidth, shouldScroll, imageCount]);

  return { containerRef, translateX };
};