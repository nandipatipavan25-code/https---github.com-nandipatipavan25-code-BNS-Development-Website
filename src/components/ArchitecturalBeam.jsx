import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitecturalBeam({
  label = null,
  alignment = "center", // 'left' | 'center' | 'right'
  className = "",
  showCoordinates = false
}) {
  return (
    <div className={`relative py-8 w-full overflow-hidden ${className}`}>
      {/* Precision Structural Red Line */}
      <div className="relative flex items-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-red to-transparent origin-left"
        />

        {/* Central or Aligned Red Structural Node */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-brand-red rotate-45 shadow-[0_0_12px_#D71920]" />
        </div>
      </div>

      {/* Optional Metadata / Label */}
      {(label || showCoordinates) && (
        <div className="flex items-center justify-between text-[10px] font-mono text-brand-steel tracking-widest uppercase mt-2 px-4">
          <span>{label || '// STRUCTURAL AXIS'}</span>
          {showCoordinates && <span>ELEV: +120.00' // BNS.BEAM</span>}
        </div>
      )}
    </div>
  );
}
