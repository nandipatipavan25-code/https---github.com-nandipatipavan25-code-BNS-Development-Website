import React, { useEffect, useRef, useMemo } from 'react';

/**
 * SphericalArcs Component
 * Faithful implementation of https://framer.com/m/SphericalArcs-ouUvJX.js@ZUjWq4Ff7c91Y0D9Ox4f
 * Pure HTML5 Canvas 3D spherical math projection with animated flowing glowing arcs,
 * tilt & pitch rotation, and mouse-activated glow rings.
 */

const TAU = Math.PI * 2;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const DEFAULT_SETTINGS = {
  countMultiplier: 0.42,
  minSize: 2.0,
  maxSize: 2.8,
  medianSize: 2.4,
  sphereWidth: 0.485,
  sphereHeight: 0.485,
  tilt: -12,
  rotation: 20,
  twist: 0.65,
  speed: 1.3,
  lineOpacity: 0.82,
  glow: 1.15,
  hoverActivation: true,
  activationBrightness: 1.6,
  activationSpeed: 1.3,
  activationFade: 1.4,
  activationColor: '#D71920', // Brand Red
  activationColorEnd: '#FF6B6B', // Vibrant Coral Red
};

function parseHexColor(hex, fallback = [215, 25, 32]) {
  if (typeof hex !== 'string') return fallback;
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  if (Number.isNaN(num)) return fallback;
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function projectSpherePoint(u, lat, time, width, height, s) {
  // Longitude with twist
  const lon = lat + (time * TAU) / 24 + s.twist * Math.cos(u);
  // 3D Unit sphere coordinate
  const sx = Math.sin(u) * Math.cos(lon);
  const sy = -Math.cos(u);
  const sz = Math.sin(u) * Math.sin(lon);

  // Pitch rotation
  const rotRad = (s.rotation * Math.PI) / 180;
  const ry = sy * Math.cos(rotRad) - sz * Math.sin(rotRad);
  const rz = sy * Math.sin(rotRad) + sz * Math.cos(rotRad);

  // Screen projection
  const r = Math.min(width, height);
  const px = sx * r * s.sphereWidth;
  const py = ry * r * s.sphereHeight;

  // Screen tilt
  const tiltRad = (s.tilt * Math.PI) / 180;
  const cosT = Math.cos(tiltRad);
  const sinT = Math.sin(tiltRad);

  return {
    x: width / 2 + px * cosT - py * sinT,
    y: height / 2 + px * sinT + py * cosT,
    depth: rz,
    surface: { x: sx, y: ry, z: rz },
  };
}

function hitSphere(pointer, width, height, s) {
  if (!pointer.active || s.sphereWidth <= 0 || s.sphereHeight <= 0) return null;
  const tiltRad = (s.tilt * Math.PI) / 180;
  const cosT = Math.cos(tiltRad);
  const sinT = Math.sin(tiltRad);
  const dx = pointer.x - width / 2;
  const dy = pointer.y - height / 2;
  const r = Math.min(width, height);
  const u = (dx * cosT + dy * sinT) / (r * s.sphereWidth);
  const v = (-dx * sinT + dy * cosT) / (r * s.sphereHeight);
  const f = u * u + v * v;
  if (!Number.isFinite(f) || f > 1) return null;
  return { x: u, y: v, z: Math.sqrt(Math.max(0, 1 - f)) };
}

function sphereAngle(a, b) {
  const dot = a.x * b.x + a.y * b.y + a.z * b.z;
  return Math.acos(clamp(dot, -1, 1));
}

function activationAt(surface, state) {
  if (!state.source || state.presence === 0) return 0;
  const dist = sphereAngle(surface, state.source);
  const ringPos = Math.max(0, Math.min(1, (state.radius + 0.35 - dist) / 0.35));
  const ring = ringPos * ringPos * (3 - 2 * ringPos);
  const cursorGlow = state.cursor
    ? Math.exp(-Math.pow(sphereAngle(surface, state.cursor) / 0.3, 2))
    : 0;
  return state.presence * ring * (1 + 0.35 * cursorGlow);
}

export default function SphericalArcs({
  className = '',
  intensity = 1.0,
  settings: customSettings = {},
}) {
  const canvasRef = useRef(null);
  const timeAccumulator = useRef(0);
  const activationRef = useRef({
    inside: false,
    source: null,
    cursor: null,
    radius: 0,
    presence: 0,
  });

  const s = useMemo(
    () => ({ ...DEFAULT_SETTINGS, ...customSettings }),
    [customSettings]
  );
  const curveCount = Math.round(75 * s.countMultiplier);

  const startRGB = useMemo(() => parseHexColor(s.activationColor), [s.activationColor]);
  const endRGB = useMemo(() => parseHexColor(s.activationColorEnd), [s.activationColorEnd]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let lastTime = performance.now();
    let viewport = { width: 1, height: 1 };
    const pointer = { x: 0, y: 0, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      viewport = { width: rect.width, height: rect.height };
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        pointer.x = x;
        pointer.y = y;
        pointer.active = true;
      } else {
        pointer.active = false;
      }
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave, { passive: true });

    const tick = (now) => {
      const delta = Math.min(50, now - lastTime) / 1000;
      lastTime = now;

      const { width, height } = viewport;
      ctx.clearRect(0, 0, width, height);

      timeAccumulator.current = (timeAccumulator.current + delta * s.speed) % 24;
      const time = timeAccumulator.current;

      // Update activation
      const hit = hitSphere(pointer, width, height, s);
      const prevAct = activationRef.current;
      if (hit && s.hoverActivation) {
        const isNew = !prevAct.source || prevAct.presence === 0;
        activationRef.current = {
          inside: true,
          source: isNew ? hit : prevAct.source,
          cursor: hit,
          radius: Math.min(Math.PI, (isNew ? 0 : prevAct.radius) + delta * s.activationSpeed * Math.PI),
          presence: Math.min(1, (isNew ? 0 : prevAct.presence) + delta * 5),
        };
      } else {
        const fade = s.activationFade === 0 ? 0 : Math.max(0, prevAct.presence - delta / s.activationFade);
        activationRef.current = { ...prevAct, inside: false, presence: fade };
      }

      const actState = activationRef.current;
      ctx.lineCap = 'round';

      // Render Curves
      for (let c = 0; c < curveCount; c++) {
        const u = (c / Math.max(1, curveCount)) * Math.PI;
        const unitPos = (c * 0.61803398875) % 1;
        const thickness = s.minSize + (s.maxSize - s.minSize) * Math.sin(unitPos * Math.PI);
        const flow = ((time / 8 + unitPos) % 1 + 1) % 1;

        for (let i = 0; i < 44; i++) {
          const point = projectSpherePoint(((i + 0.5) / 44) * TAU, u, time, width, height, s);
          const dist = (flow - i / 44 + 1) % 1;
          const headGlow = Math.exp(-dist * 20);
          const depthNorm = (point.depth + 1) / 2;
          const act = activationAt(point.surface, actState) * s.activationBrightness;
          const alpha = Math.min(1, (s.lineOpacity * (0.15 + depthNorm * 0.65 + headGlow * 0.8) + act * 0.55) * intensity);

          if (alpha < 0.01) continue;

          // Color blend between white/gray and brand red
          const rColor = Math.round(220 + (startRGB[0] - 220) * act);
          const gColor = Math.round(220 + (startRGB[1] - 220) * act);
          const bColor = Math.round(225 + (startRGB[2] - 225) * act);

          ctx.beginPath();
          for (let k = 0; k <= 2; k++) {
            const sub = projectSpherePoint(((i + k / 2) / 44) * TAU, u, time, width, height, s);
            if (k === 0) ctx.moveTo(sub.x, sub.y);
            else ctx.lineTo(sub.x, sub.y);
          }

          ctx.lineWidth = thickness * (0.65 + depthNorm * 0.35) * (1 + Math.min(0.25, act * 0.2));
          ctx.strokeStyle = `rgba(${rColor}, ${gColor}, ${bColor}, ${alpha})`;
          ctx.stroke();

          // Ambient Glow Pass
          if (headGlow > 0.3 || act > 0.4) {
            ctx.lineWidth = thickness * 2.5;
            ctx.strokeStyle = `rgba(${startRGB[0]}, ${startRGB[1]}, ${startRGB[2]}, ${alpha * 0.25})`;
            ctx.stroke();
          }
        }

        // Flowing Head Particle
        const head = projectSpherePoint(flow * TAU, u, time, width, height, s);
        if (Number.isFinite(head.x) && Number.isFinite(head.y)) {
          const headAct = activationAt(head.surface, actState) * s.activationBrightness;
          ctx.beginPath();
          ctx.arc(head.x, head.y, thickness * 1.1, 0, TAU);
          ctx.fillStyle = `rgba(${startRGB[0]}, ${startRGB[1]}, ${startRGB[2]}, ${Math.min(1, 0.6 + headAct * 0.4)})`;
          ctx.shadowColor = `rgba(${startRGB[0]}, ${startRGB[1]}, ${startRGB[2]}, 0.8)`;
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [intensity, s, curveCount, startRGB, endRGB]);

  return (
    <div className={`relative w-full h-full min-h-[420px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair select-none"
      />
    </div>
  );
}
