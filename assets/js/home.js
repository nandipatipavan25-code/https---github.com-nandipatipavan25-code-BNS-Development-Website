/**
 * BNS DEVELOPMENT — HOMEPAGE DYNAMICS
 * Handles cinematic hero video controls and horizontal-on-vertical project sequence.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initHorizontalProjects();
});

/* ── 1. Hero Video Controls & Autoplay Resilience ── */
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  const playBtn = document.getElementById('video-toggle-play');
  const muteBtn = document.getElementById('video-toggle-mute');
  const centerPlayBtn = document.getElementById('video-center-play');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const muteIcon = document.getElementById('mute-icon');
  const unmuteIcon = document.getElementById('unmute-icon');

  if (!video) return;

  const updatePlayIcons = () => {
    if (video.paused) {
      if (playIcon) playIcon.classList.remove('hidden');
      if (pauseIcon) pauseIcon.classList.add('hidden');
      if (centerPlayBtn) centerPlayBtn.classList.remove('hidden');
    } else {
      if (playIcon) playIcon.classList.add('hidden');
      if (pauseIcon) pauseIcon.classList.remove('hidden');
      if (centerPlayBtn) centerPlayBtn.classList.add('hidden');
    }
  };

  const updateMuteIcons = () => {
    if (video.muted) {
      if (muteIcon) muteIcon.classList.remove('hidden');
      if (unmuteIcon) unmuteIcon.classList.add('hidden');
    } else {
      if (muteIcon) muteIcon.classList.add('hidden');
      if (unmuteIcon) unmuteIcon.classList.remove('hidden');
    }
  };

  const togglePlay = () => {
    if (video.paused) {
      video.play().then(updatePlayIcons).catch(() => {});
    } else {
      video.pause();
      updatePlayIcons();
    }
  };

  const toggleMute = () => {
    video.muted = !video.muted;
    updateMuteIcons();
  };

  if (playBtn) playBtn.addEventListener('click', togglePlay);
  if (centerPlayBtn) centerPlayBtn.addEventListener('click', togglePlay);
  if (muteBtn) muteBtn.addEventListener('click', toggleMute);
  video.addEventListener('click', togglePlay);

  video.play().then(() => {
    updatePlayIcons();
    updateMuteIcons();
  }).catch(() => {
    video.muted = true;
    video.play().then(() => {
      updatePlayIcons();
      updateMuteIcons();
    }).catch(() => {
      updatePlayIcons();
    });
  });
}

/* ── 2. Pinned Horizontal Project Sequence on Vertical Scroll ── */
function initHorizontalProjects() {
  const pinSection = document.getElementById('projects-pin-section');
  const stickyFrame = document.getElementById('projects-sticky-frame');
  const track = document.getElementById('projects-track');
  const prevBtn = document.getElementById('projects-prev-btn');
  const nextBtn = document.getElementById('projects-next-btn');

  if (!pinSection || !track) return;

  // On wide screens (>= 1024px), translate horizontally as user scrolls vertically
  const isDesktop = () => window.innerWidth >= 1024;

  const onScroll = () => {
    if (!isDesktop()) {
      track.style.transform = 'none';
      return;
    }

    const rect = pinSection.getBoundingClientRect();
    const sectionTop = rect.top;
    const totalDist = pinSection.offsetHeight - window.innerHeight;

    if (totalDist <= 0) return;

    // Progress 0 when top touches viewport, 1 when section finishes
    const progress = Math.min(Math.max(-sectionTop / totalDist, 0), 1);
    const maxTranslate = Math.max(track.scrollWidth - window.innerWidth + 120, 0);
    const currentX = progress * maxTranslate;

    track.style.transform = `translate3d(${-currentX}px, 0, 0)`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  // Button controls (smooth horizontal scroll on click for tablet/mobile or manual navigation)
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (isDesktop()) {
        const scrollAmount = window.innerHeight * 0.55;
        window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      } else {
        track.parentElement.scrollBy({ left: -360, behavior: 'smooth' });
      }
    });

    nextBtn.addEventListener('click', () => {
      if (isDesktop()) {
        const scrollAmount = window.innerHeight * 0.55;
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else {
        track.parentElement.scrollBy({ left: 360, behavior: 'smooth' });
      }
    });
  }
}
