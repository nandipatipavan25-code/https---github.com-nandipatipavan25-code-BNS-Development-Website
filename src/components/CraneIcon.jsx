import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light.js';
import craneData from '../assets/crane.json';

/**
 * CraneIcon Component
 * Uses the custom "06 progress crane house" Lottie animation (crane.json)
 * representing BNS general contracting & structural development.
 */
export default function CraneIcon({
  size = 20, // width & height in px
  className = '',
  loop = true,
  autoplay = true,
}) {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData: craneData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
        progressiveLoad: true,
      },
    });

    // Pause animation when offscreen to conserve CPU / GPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (animRef.current) {
          if (entry.isIntersecting) {
            animRef.current.play();
          } else {
            animRef.current.pause();
          }
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, [loop, autoplay]);

  return (
    <span
      ref={containerRef}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={`shrink-0 align-middle select-none pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
