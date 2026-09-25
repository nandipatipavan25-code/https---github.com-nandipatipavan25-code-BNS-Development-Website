import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.7,
  distance = 30,
  scale = false,
  className = '',
  threshold = '-50px'
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, x: 0 };
      case 'down': return { y: -distance, x: 0 };
      case 'left': return { x: distance, y: 0 };
      case 'right': return { x: -distance, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const pos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...pos,
        scale: scale ? 0.96 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // cinematic architectural ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
