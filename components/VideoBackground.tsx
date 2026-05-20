'use client';

import { useRef, useEffect } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // ─── state ────────────────────────────────────────────────────────────────
    let targetTime = 0;   // where scroll wants us to be
    let rafId = 0;
    let looping = false;

    // ─── how fast we chase the target (0 = frozen, 1 = instant) ──────────────
    // 0.12 gives visible cinematic lag on slow scroll, still snappy on fast
    const LERP = 0.12;
    const SNAP_THRESHOLD = 0.002; // seconds — close enough to stop looping

    // ─── main lerp loop ───────────────────────────────────────────────────────
    const loop = () => {
      if (!video.duration) { looping = false; return; }

      const diff = targetTime - video.currentTime;

      if (Math.abs(diff) <= SNAP_THRESHOLD) {
        // Snapped — park the video and let the loop sleep until next scroll
        video.currentTime = targetTime;
        looping = false;
        return;
      }

      // Move LERP-fraction of remaining gap every frame
      video.currentTime += diff * LERP;
      rafId = requestAnimationFrame(loop);
    };

    // Wake the loop whenever a scroll event updates the target
    const wake = () => {
      if (!looping) {
        looping = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    // ─── scroll handler ───────────────────────────────────────────────────────
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (!total || !video.duration) return;
      const progress = Math.max(0, Math.min(1, window.scrollY / total));
      targetTime = progress * video.duration;
      wake();
    };

    // ─── init ─────────────────────────────────────────────────────────────────
    const onReady = () => {
      video.currentTime = 0.01;
      onScroll();
    };

    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener('loadedmetadata', onReady, { once: true });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Fallback gradient shown while video loads */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, #060d1f 0%, #0a1a3a 50%, #091530 100%)',
        }}
      />

      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/dragon-scrub.mp4" type="video/mp4" />
      </video>

      {/* Darkening veil so content is always legible */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 10, 0.32)',
        }}
      />
    </div>
  );
}
