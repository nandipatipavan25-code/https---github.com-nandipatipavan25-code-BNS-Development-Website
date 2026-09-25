import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({
  text,
  as: Component = 'h2',
  className = '',
  delay = 0,
  stagger = 0.035,
  highlightWord = '',
  highlightClass = 'text-brand-red font-extrabold'
}) {
  const words = text.split(' ');

  return (
    <Component className={`inline-flex flex-wrap items-baseline gap-x-[0.24em] gap-y-[0.05em] tracking-tight leading-[1.15] ${className}`}>
      {words.map((word, i) => {
        const isHighlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.04em]">
            <motion.span
              initial={{ y: '110%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1], // architectural cubic bezier
              }}
              className={`inline-block ${isHighlight ? highlightClass : ''}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
