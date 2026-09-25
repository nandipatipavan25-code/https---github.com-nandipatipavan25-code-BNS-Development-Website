import React from 'react';
import { motion } from 'framer-motion';
import ScrollWordReveal from './ScrollWordReveal';
import CraneIcon from './CraneIcon';

export { CraneIcon };

/**
 * Scale Icon Component
 * Powered by crane.json Lottie animation ("06 progress crane house")
 */
export function ConstructionScaleSVG({ color = 'red', size = 22, className = '' }) {
  return <CraneIcon size={size} className={className} />;
}

export default function SectionHeading({
  tag = "SECTION",
  title = "HEADING TITLE",
  highlight = "",
  description = "",
  centered = false,
  theme = "dark", // 'dark' | 'light'
  scaleColor = "red", // 'red' | 'white'
  useWordReveal = true,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  // Clean tag string by removing leading slashes
  const cleanTag = typeof tag === 'string' ? tag.replace(/^\/\/\s*/, '') : tag;
  const hasCustomMargin = /(^|\s)m[by]-/.test(className);

  return (
    <div className={`${hasCustomMargin ? '' : (description ? 'mb-6 sm:mb-8' : 'mb-3 sm:mb-4')} ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {/* Category Tag with Construction-Scale SVG */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2.5 px-3 py-1 rounded-full font-mono text-[10px] sm:text-[11px] tracking-widest uppercase mb-3 bg-white/[0.05] border border-white/[0.12] backdrop-blur-md shadow-sm ${
          centered ? 'justify-center' : ''
        }`}
      >
        <ConstructionScaleSVG color={scaleColor} />
        <span className="font-semibold text-brand-subheading tracking-wider">{cleanTag}</span>
      </motion.div>

      {/* Main Title - Matches the "modern alphabet ARCHITEC" reference */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-semibold tracking-[0.03em] uppercase leading-[1.15] text-brand-heading ${
          centered ? 'text-center' : ''
        } ${titleClassName}`}
      >
        <span>{title} </span>
        {highlight && (
          <span className="text-brand-red font-semibold">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description with Scroll Text Reveal Effect */}
      {description && (
        <div className="mt-2.5 sm:mt-3">
          {typeof description === 'string' && useWordReveal ? (
            <ScrollWordReveal
              text={description}
              colorRevealed="#A8A8A0"
              colorHidden="rgba(168, 168, 160, 0.25)"
              className={`text-sm sm:text-base leading-relaxed font-sans text-brand-subtext ${
                centered ? 'justify-center text-center' : ''
              } ${descriptionClassName}`}
            />
          ) : (
            <div className={`text-sm sm:text-base leading-relaxed font-sans text-[#A8A8A0] ${
              centered ? 'justify-center text-center' : ''
            } ${descriptionClassName}`}>
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
