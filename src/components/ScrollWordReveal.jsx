import React, { useRef, useState, useEffect, useMemo } from 'react';

/**
 * ScrollWordReveal Component
 * Smooth architectural progressive text reveal that triggers on viewport entry.
 * 
 * Features:
 * - Triggers automatically once the section enters the viewport (IntersectionObserver)
 * - Smooth cascading word-by-word reveal with calibrated architectural ease
 * - Guarantees 100% full visibility and legibility (never stuck in a gray/faded state)
 * - Hardware accelerated CSS transitions (60fps performance, zero scroll jank)
 * - Natural text wrapping and full responsiveness across all screen sizes
 */
export default function ScrollWordReveal({
  text = '',
  className = '',
  splitMode = 'words', // 'words' | 'characters'
  colorHidden = 'rgba(204, 204, 204, 0.24)',
  colorRevealed = '#CCCCCC',
  stagger = 0.022, // delay between words (seconds)
  yOffset = 3,     // subtle tactile lift (px)
  blur = 0,        // optional blur (px)
  highlightWord = '',
  highlightColor = '#D71920',
  as: Component = 'p',
  delay = 0.1,     // initial delay before cascade starts
  threshold = 0.12,// viewport visibility ratio to trigger
}) {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Split text into tokens (words and spaces)
  const { tokens, unitCount } = useMemo(() => {
    const raw = String(text || '');
    const parts = raw.split(/(\s+)/);
    const result = [];
    let count = 0;

    parts.forEach((part) => {
      if (!part) return;
      const isSpace = /^\s+$/.test(part);
      if (isSpace) {
        result.push({ text: part, isSpace: true, unit: -1 });
      } else {
        if (splitMode === 'characters') {
          const chars = Array.from(part);
          const charUnits = chars.map((c) => ({
            char: c,
            unit: count++,
          }));
          result.push({ isWord: true, chars: charUnits, isSpace: false });
        } else {
          // Words mode
          result.push({
            text: part,
            isSpace: false,
            unit: count++,
            isHighlight:
              highlightWord &&
              part.toLowerCase().includes(highlightWord.toLowerCase()),
          });
        }
      }
    });

    return { tokens: result, unitCount: count };
  }, [text, splitMode, highlightWord]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check if user prefers reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    // Trigger reveal as soon as section enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect(); // once: true - ensures text stays 100% visible
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // triggers cleanly when 40px into view
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  let spanIndex = 0;

  return (
    <Component
      ref={containerRef}
      className={`leading-relaxed select-text ${className}`}
      style={{ display: 'block' }}
    >
      {tokens.map((token, tokenIdx) => {
        if (token.isSpace) {
          return (
            <span key={`space-${tokenIdx}`} className="select-text">
              {token.text}
            </span>
          );
        }

        if (splitMode === 'characters' && token.chars) {
          return (
            <span
              key={`word-${tokenIdx}`}
              style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            >
              {token.chars.map((c, cIdx) => {
                const currentIndex = spanIndex++;
                const wordDelay = delay + (c.unit * stagger);
                return (
                  <span
                    key={`c-${cIdx}`}
                    style={{
                      display: 'inline-block',
                      opacity: isRevealed ? 1 : 0.28,
                      color: isRevealed ? colorRevealed : colorHidden,
                      transform: isRevealed ? 'translateY(0)' : `translateY(${yOffset}px)`,
                      filter: blur > 0 && !isRevealed ? `blur(${blur}px)` : 'none',
                      transition: `opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${wordDelay}s, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${wordDelay}s, color 0.4s ease ${wordDelay}s, filter 0.45s ease ${wordDelay}s`,
                      willChange: isRevealed ? 'auto' : 'opacity, transform',
                    }}
                  >
                    {c.char}
                  </span>
                );
              })}
            </span>
          );
        }

        // Words mode
        const currentIndex = spanIndex++;
        const isHl = token.isHighlight;
        const targetColor = isHl ? highlightColor : colorRevealed;
        const initialColor = isHl ? 'rgba(215, 25, 32, 0.4)' : colorHidden;
        const wordDelay = delay + (token.unit * stagger);

        return (
          <span
            key={`w-${tokenIdx}`}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              opacity: isRevealed ? 1 : 0.28,
              color: isRevealed ? targetColor : initialColor,
              transform: isRevealed ? 'translateY(0)' : `translateY(${yOffset}px)`,
              filter: blur > 0 && !isRevealed ? `blur(${blur}px)` : 'none',
              transition: `opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${wordDelay}s, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${wordDelay}s, color 0.4s ease ${wordDelay}s, filter 0.45s ease ${wordDelay}s`,
              willChange: isRevealed ? 'auto' : 'opacity, transform',
            }}
          >
            {token.text}
          </span>
        );
      })}
    </Component>
  );
}
