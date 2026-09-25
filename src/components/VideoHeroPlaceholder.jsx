import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sliders, Layers } from 'lucide-react';

export default function VideoHeroPlaceholder({
  videoSrc = null, // Set to MP4 URL when client supplies final video
  posterImage = "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2000&q=85",
  title = "BNS DEVELOPMENT CINEMATIC SHOWCASE",
  subtitle = "Architecture • Structural Assembly • Turnkey Delivery",
  className = ""
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [overlayStyle, setOverlayStyle] = useState('dark'); // 'dark' | 'light' | 'grid'

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-brand-border bg-brand-graphite shadow-2xl ${className}`}>
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full pb-[56.25%] overflow-hidden">
        {/* If video source is provided, render video element; otherwise render high-resolution poster fallback */}
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={posterImage}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${posterImage})` }}
          />
        )}

        {/* Dynamic Overlay System (Dark, Light, Architectural Grid) */}
        {overlayStyle === 'dark' && (
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/30 pointer-events-none" />
        )}
        {overlayStyle === 'light' && (
          <div className="absolute inset-0 bg-brand-black/25 backdrop-blur-[1px] pointer-events-none" />
        )}
        {overlayStyle === 'grid' && (
          <div className="absolute inset-0 bg-brand-black/60 blueprint-grid pointer-events-none" />
        )}

        {/* Architectural Crosshairs & Framing Lines */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-red pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-red pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-red pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-red pointer-events-none" />

        {/* Center Architectural Overlay / Play Trigger */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 max-w-xl"
          >
            {/* Play/Inspection Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-black/80 border border-brand-red/60 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-brand-red hover:shadow-[0_0_30px_rgba(215,25,32,0.5)] focus:outline-none"
              aria-label={isPlaying ? 'Pause showcase' : 'Play showcase'}
            >
              <span className="absolute inset-0 rounded-full border border-brand-red/30 animate-ping opacity-60" />
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-brand-red" />
              ) : (
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-brand-red translate-x-0.5" />
              )}
            </button>

            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/40 text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-brand-red uppercase">
                {videoSrc ? '4K CINEMATIC STREAM' : 'CLIENT VIDEO READY PLACEHOLDER'}
              </span>
              <h3 className="text-lg sm:text-2xl font-semibold font-display tracking-tight text-white">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-offwhite/80 font-mono">
                {subtitle}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Top Control Bar */}
        <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-brand-black/70 backdrop-blur-md border border-brand-border text-[11px] font-mono text-brand-steel">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span>VIDEO PORT // 16:9 NATIVE</span>
          </div>

          {/* Overlay Filter Controls */}
          <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-lg bg-brand-black/70 backdrop-blur-md border border-brand-border">
            <button
              onClick={() => setOverlayStyle('dark')}
              className={`px-2.5 py-1 text-[10px] font-mono rounded transition-colors ${
                overlayStyle === 'dark' ? 'bg-brand-red text-white' : 'text-brand-steel hover:text-white'
              }`}
            >
              DARK
            </button>
            <button
              onClick={() => setOverlayStyle('light')}
              className={`px-2.5 py-1 text-[10px] font-mono rounded transition-colors ${
                overlayStyle === 'light' ? 'bg-brand-red text-white' : 'text-brand-steel hover:text-white'
              }`}
            >
              LIGHT
            </button>
            <button
              onClick={() => setOverlayStyle('grid')}
              className={`px-2.5 py-1 text-[10px] font-mono rounded transition-colors ${
                overlayStyle === 'grid' ? 'bg-brand-red text-white' : 'text-brand-steel hover:text-white'
              }`}
            >
              GRID
            </button>
          </div>
        </div>

        {/* Bottom Technical HUD Strip */}
        <div className="absolute bottom-4 left-6 right-6 hidden md:flex items-center justify-between text-[11px] font-mono text-brand-steel/80 z-20">
          <div className="flex items-center gap-3">
            <span>RES: 3840×2160 UHD</span>
            <span>•</span>
            <span>FPS: 60</span>
            <span>•</span>
            <span>STATUS: READY FOR DROP-IN</span>
          </div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-black/70 backdrop-blur-md border border-brand-border hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-red" />}
            <span>{isMuted ? 'UNMUTE' : 'MUTED'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
