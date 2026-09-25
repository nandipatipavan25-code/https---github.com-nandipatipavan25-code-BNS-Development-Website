import React, { useRef, useState, useEffect } from 'react';

/**
 * ConstructionBackground Component
 * Provides:
 * 1. Background video playback (/videos/bg-video.mp4) throughout the website
 *    except for Home, Projects, and Footer sections as requested by user.
 * 2. CAD drafting blueprint grid
 * 3. Interactive empty-space spotlight & crosshair tracker
 * 4. 100% dark glassmorphism with no white seams.
 */
export default function ConstructionBackground({
  showVideo = true,
  videoSrc = '/videos/bg-video.mp4',
  videoOpacity = null
}) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    // Strict DOM properties for reliable autoplay & continuous looping
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('loop', '');

    const playVideo = () => {
      if (!video) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser prevented unmuted autoplay or paused, resume on first user interaction
          const resumeOnInteraction = () => {
            if (video && video.paused) {
              video.muted = true;
              video.play().catch(() => {});
            }
          };
          window.addEventListener('click', resumeOnInteraction, { once: true, passive: true });
          window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
          window.addEventListener('scroll', resumeOnInteraction, { once: true, passive: true });
        });
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true });
      video.addEventListener('canplay', playVideo, { once: true });
    }

    // Seamless continuous loop handler: rewinds before freeze and plays seamlessly
    const handleTimeUpdate = () => {
      if (video && video.duration > 0) {
        // When within 150ms of the end, seamlessly loop back to start to prevent freeze frame
        if (video.currentTime >= video.duration - 0.15) {
          video.currentTime = 0;
          if (video.paused) {
            playVideo();
          }
        }
      }
    };

    // Hard loop fallback: whenever ended event fires, rewind to 0 and play immediately
    const handleEnded = () => {
      if (video) {
        video.currentTime = 0;
        playVideo();
      }
    };

    // Auto-resume if accidentally paused or interrupted at any point
    const handlePause = () => {
      if (showVideo && video) {
        playVideo();
      }
    };

    // Auto-resume when tab becomes visible or receives focus
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && showVideo && video) {
        playVideo();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('pause', handlePause);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', playVideo);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', playVideo);
    };
  }, [showVideo, videoSrc]);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsHovered(true);
    };

    const handleLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#07080A]"
      aria-hidden="true"
    >
      {/* ── 1. Video Background (supports contact-bg-video.mp4 for Contact, bg-video.mp4 throughout) ── */}
      {showVideo && (
        <div className="absolute inset-0 z-0 overflow-hidden transition-opacity duration-700">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            disablePictureInPicture
            style={{
              opacity: videoOpacity ?? (videoSrc.includes('contact') ? 0.20 : 0.75)
            }}
            className="w-full h-full object-cover filter contrast-110 brightness-95 scale-105 animate-video-drift pointer-events-none transition-opacity duration-500"
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
            onPause={(e) => {
              if (showVideo && e.currentTarget) {
                e.currentTarget.play().catch(() => {});
              }
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src="/videos/Bg%20video.mp4" type="video/mp4" />
            <source src="/videos/bg-video.mp4" type="video/mp4" />
          </video>
          {/* Glassmorphic & Vignette Overlay tailored for video visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/60 via-[#07080A]/35 to-[#07080A]/75 pointer-events-none" />
          <div className="absolute inset-0 bg-[#07080A]/10 pointer-events-none" />
        </div>
      )}

      {/* ── 2. CAD Drafting Blueprint Grid ── */}
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      {/* ── 3. Interactive Empty-Space Spotlight Tracker ── */}
      {isHovered && (
        <div
          className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              'radial-gradient(circle, rgba(215, 25, 32, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)',
          }}
        />
      )}

      {/* ── 4. Ambient Red Laser Beam Sweep ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent animate-pulse" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-brand-red/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-brand-red/5 blur-[140px]" />
    </div>
  );
}
