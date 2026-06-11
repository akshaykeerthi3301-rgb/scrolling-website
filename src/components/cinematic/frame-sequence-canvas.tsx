"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type FrameSequenceCanvasProps = {
  progress: number;
  frameCount: number;
  frameBasePath: string;
  pad?: number;
  extension?: string;
  className?: string;
};

function framePath(basePath: string, frame: number, pad: number, extension: string) {
  return `${basePath}/frame-${String(frame).padStart(pad, "0")}.${extension}`;
}

function drawCover(ctx: CanvasRenderingContext2D, image: HTMLImageElement, width: number, height: number) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;

  ctx.drawImage(image, x, y, drawWidth, drawHeight);
}

export function FrameSequenceCanvas({
  progress,
  frameCount,
  frameBasePath,
  pad = 4,
  extension = "svg",
  className = "",
}: FrameSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);

  const urls = useMemo(
    () => Array.from({ length: frameCount }, (_, index) => framePath(frameBasePath, index, pad, extension)),
    [extension, frameBasePath, frameCount, pad],
  );

  useEffect(() => {
    let cancelled = false;
    imagesRef.current = [];

    urls.forEach((url, index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = url;
      image.onload = () => {
        if (!cancelled) {
          setLoaded((value) => value + 1);
        }
      };
      imagesRef.current[index] = image;
    });

    return () => {
      cancelled = true;
    };
  }, [urls]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    if (!canvas || !wrapper) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return;
    }

    const cssWidth = Number.parseFloat(canvas.style.width) || canvas.width;
    const cssHeight = Number.parseFloat(canvas.style.height) || canvas.height;
    const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.round(progress * (frameCount - 1))));
    const image = imagesRef.current[frameIndex] ?? imagesRef.current[0];

    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.fillStyle = "#080806";
    ctx.fillRect(0, 0, cssWidth, cssHeight);

    if (image?.complete && image.naturalWidth > 0) {
      drawCover(ctx, image, cssWidth, cssHeight);
    }

    const glow = ctx.createLinearGradient(0, 0, cssWidth, cssHeight);
    glow.addColorStop(0, "rgba(255, 255, 255, 0.08)");
    glow.addColorStop(0.45, "rgba(12, 166, 156, 0.05)");
    glow.addColorStop(1, "rgba(240, 127, 74, 0.12)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, cssWidth, cssHeight);
  }, [frameCount, loaded, progress]);

  return (
    <div ref={wrapperRef} className={`relative h-full w-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
      {loaded < Math.min(frameCount, 8) ? (
        <div className="absolute inset-0 grid place-items-center bg-neutral-950 text-xs text-white/50">
          Loading visual system
        </div>
      ) : null}
    </div>
  );
}
