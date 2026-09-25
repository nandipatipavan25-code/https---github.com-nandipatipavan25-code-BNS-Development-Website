import React, { useState, useEffect } from 'react';

/**
 * TypewriterText Component
 * Types out the provided text character by character on load.
 * Features an optional animated brand cursor that auto-dismisses upon completion.
 */
export default function TypewriterText({
  text,
  speed = 20,
  startDelay = 350,
  className = '',
  cursorColor = '#D71920',
  onComplete,
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let intervalId = null;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(intervalId);
          setIsDone(true);
          if (onComplete) onComplete();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay, onComplete]);

  return (
    <p className={className}>
      <span>{displayedText}</span>
      {!isDone && (
        <span
          className="inline-block w-[2px] h-[1.1em] ml-1 bg-brand-red align-middle animate-pulse"
          style={{ backgroundColor: cursorColor }}
          aria-hidden="true"
        />
      )}
    </p>
  );
}
