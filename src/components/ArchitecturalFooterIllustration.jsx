import React from 'react';

export default function ArchitecturalFooterIllustration() {
  return (
    <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-[340px] opacity-20 text-brand-offwhite select-none">
      <svg
        className="w-full h-full object-cover object-bottom"
        viewBox="0 0 1600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="footerElevationFade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0" />
            <stop offset="60%" stopColor="#0A0A0A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Ground Baseline */}
        <line x1="0" y1="380" x2="1600" y2="380" stroke="currentColor" strokeWidth="1.5" />
        <line x1="0" y1="385" x2="1600" y2="385" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Building 1 (Left High-Rise Concrete Shell) */}
        <g opacity="0.6">
          <rect x="80" y="100" width="160" height="280" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          {/* Columns & Slabs */}
          {[140, 180, 220, 260, 300, 340].map((y, i) => (
            <line key={`b1-slab-${i}`} x1="80" y1={y} x2="240" y2={y} stroke="currentColor" strokeWidth="0.8" />
          ))}
          {[120, 160, 200].map((x, i) => (
            <line key={`b1-col-${i}`} x1={x} y1="100" x2={x} y2="380" stroke="currentColor" strokeWidth="0.8" />
          ))}
          {/* Diagonal Cross-bracing on shell */}
          <line x1="80" y1="180" x2="240" y2="260" stroke="#D71920" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="240" y1="180" x2="80" y2="260" stroke="#D71920" strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="85" y="125" fill="currentColor" fontSize="9" fontFamily="monospace">BNS-ELEV-01 // FL</text>
        </g>

        {/* Tower Crane 1 (Left Crane) */}
        <g opacity="0.75">
          {/* Mast */}
          <line x1="280" y1="40" x2="280" y2="380" stroke="currentColor" strokeWidth="1.5" />
          <line x1="295" y1="40" x2="295" y2="380" stroke="currentColor" strokeWidth="1.5" />
          {[60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y, i) => (
            <g key={`crane1-${i}`}>
              <line x1="280" y1={y} x2="295" y2={y} stroke="currentColor" strokeWidth="0.8" />
              <line x1="280" y1={y} x2="295" y2={y + 30} stroke="currentColor" strokeWidth="0.5" />
            </g>
          ))}
          {/* Jib & Counterjib */}
          <line x1="160" y1="40" x2="440" y2="40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="200" y1="40" x2="287" y2="10" stroke="currentColor" strokeWidth="1" />
          <line x1="440" y1="40" x2="287" y2="10" stroke="currentColor" strokeWidth="1" />
          <line x1="287" y1="10" x2="287" y2="40" stroke="currentColor" strokeWidth="1.5" />
          {/* Hoist cable & red hook */}
          <line x1="390" y1="40" x2="390" y2="130" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 2" />
          <circle cx="390" cy="133" r="3" fill="#D71920" />
        </g>

        {/* Building 2 (Center Commercial Superstructure) */}
        <g opacity="0.7">
          <rect x="520" y="60" width="280" height="320" stroke="currentColor" strokeWidth="1.2" />
          {[100, 140, 180, 220, 260, 300, 340].map((y, i) => (
            <line key={`b2-slab-${i}`} x1="520" y1={y} x2="800" y2={y} stroke="currentColor" strokeWidth="0.8" />
          ))}
          {[570, 620, 670, 720, 770].map((x, i) => (
            <line key={`b2-col-${i}`} x1={x} y1="60" x2={x} y2="380" stroke="currentColor" strokeWidth="0.8" />
          ))}
          {/* Diagonal Trusses */}
          <line x1="520" y1="140" x2="620" y2="220" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
          <line x1="620" y1="140" x2="720" y2="220" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
          <line x1="720" y1="140" x2="800" y2="220" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
          <text x="530" y="85" fill="#D71920" fontSize="9" fontFamily="monospace">GRID BNS-TX-04 // SUPERSTRUCTURE</text>
        </g>

        {/* Tower Crane 2 (Right Crane) */}
        <g opacity="0.7">
          <line x1="1160" y1="70" x2="1160" y2="380" stroke="currentColor" strokeWidth="1.5" />
          <line x1="1175" y1="70" x2="1175" y2="380" stroke="currentColor" strokeWidth="1.5" />
          {[90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((y, i) => (
            <g key={`crane2-${i}`}>
              <line x1="1160" y1={y} x2="1175" y2={y} stroke="currentColor" strokeWidth="0.8" />
              <line x1="1160" y1={y} x2="1175" y2={y + 30} stroke="currentColor" strokeWidth="0.5" />
            </g>
          ))}
          <line x1="1020" y1="70" x2="1320" y2="70" stroke="currentColor" strokeWidth="1.5" />
          <line x1="1070" y1="70" x2="1167" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="1320" y1="70" x2="1167" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="1167" y1="40" x2="1167" y2="70" stroke="currentColor" strokeWidth="1.5" />
          <line x1="1260" y1="70" x2="1260" y2="170" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 2" />
          <circle cx="1260" cy="173" r="3" fill="#D71920" />
        </g>

        {/* Building 3 (Right Waterfront Residences) */}
        <g opacity="0.6">
          <rect x="880" y="140" width="220" height="240" stroke="currentColor" strokeWidth="1" />
          {[180, 220, 260, 300, 340].map((y, i) => (
            <line key={`b3-slab-${i}`} x1="880" y1={y} x2="1100" y2={y} stroke="currentColor" strokeWidth="0.8" />
          ))}
          {[930, 980, 1030].map((x, i) => (
            <line key={`b3-col-${i}`} x1={x} y1="140" x2={x} y2="380" stroke="currentColor" strokeWidth="0.8" />
          ))}
          <text x="890" y="165" fill="currentColor" fontSize="9" fontFamily="monospace">ELEV: +180.00' // BNS-RES</text>
        </g>

        {/* Building 4 (Far Right Development Silhouette) */}
        <g opacity="0.5">
          <polygon points="1350,380 1350,190 1480,120 1480,380" stroke="currentColor" strokeWidth="1" fill="none" />
          {[160, 200, 240, 280, 320, 360].map((y, i) => (
            <line key={`b4-slab-${i}`} x1="1350" y1={y} x2="1480" y2={y} stroke="currentColor" strokeWidth="0.6" />
          ))}
        </g>

        {/* Elevation Measurement Marks */}
        <g opacity="0.4" stroke="currentColor" strokeWidth="0.5">
          <line x1="40" y1="60" x2="40" y2="380" />
          <line x1="35" y1="60" x2="45" y2="60" />
          <line x1="35" y1="140" x2="45" y2="140" />
          <line x1="35" y1="220" x2="45" y2="220" />
          <line x1="35" y1="300" x2="45" y2="300" />
          <text x="10" y="65" fill="currentColor" fontSize="8" fontFamily="monospace">+320'</text>
          <text x="10" y="145" fill="currentColor" fontSize="8" fontFamily="monospace">+240'</text>
          <text x="10" y="225" fill="currentColor" fontSize="8" fontFamily="monospace">+160'</text>
          <text x="10" y="305" fill="currentColor" fontSize="8" fontFamily="monospace">+80'</text>
          <text x="15" y="380" fill="currentColor" fontSize="8" fontFamily="monospace">0.00'</text>
        </g>
      </svg>
    </div>
  );
}
