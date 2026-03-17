"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "ANTES",
  afterLabel = "DESPUÉS",
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Determine if src is a URL/path or a CSS gradient/color
  const isImageUrl = (src: string) =>
    src.startsWith("/") ||
    src.startsWith("http") ||
    src.startsWith("data:") ||
    src.startsWith("blob:");

  const beforeIsImage = isImageUrl(beforeSrc);
  const afterIsImage = isImageUrl(afterSrc);

  // Calculate position from pointer event
  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  // Pointer event handlers
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Auto-slide animation on first viewport intersection
  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect();

            // Animate from 70% to 50%
            const startPos = 70;
            const endPos = 50;
            const duration = 1200;
            const startTime = performance.now();

            setPosition(startPos);

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = startPos + (endPos - startPos) * eased;

              setPosition(current);

              if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
              }
            };

            animationRef.current = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative select-none overflow-hidden rounded-2xl border border-neutral-800",
        "aspect-[4/3] w-full cursor-col-resize",
        className
      )}
      style={{ touchAction: "none" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* After image (bottom layer, fully visible) */}
      {afterIsImage ? (
        <img
          src={afterSrc}
          alt={afterLabel}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      ) : (
        <div
          className="absolute inset-0 h-full w-full"
          style={{ background: afterSrc }}
        />
      )}

      {/* Before image (top layer, clipped) */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        {beforeIsImage ? (
          <img
            src={beforeSrc}
            alt={beforeLabel}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        ) : (
          <div
            className="absolute inset-0 h-full w-full"
            style={{ background: beforeSrc }}
          />
        )}
      </div>

      {/* Labels */}
      <div
        className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm"
        style={{
          opacity: position > 15 ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <span className="font-accent text-xs font-semibold uppercase tracking-wider text-text-primary">
          {beforeLabel}
        </span>
      </div>
      <div
        className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm"
        style={{
          opacity: position < 85 ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <span className="font-accent text-xs font-semibold uppercase tracking-wider text-text-primary">
          {afterLabel}
        </span>
      </div>

      {/* Draggable handle */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-10"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
        }}
      >
        {/* Vertical gold line */}
        <div
          className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #c8a45c 10%, #c8a45c 90%, transparent 100%)",
            boxShadow: "0 0 12px rgba(200, 164, 92, 0.4)",
          }}
        />

        {/* Circle grip */}
        <div
          className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-bg-primary/90 backdrop-blur-sm"
          style={{
            boxShadow: "0 0 20px rgba(200, 164, 92, 0.5)",
          }}
        >
          {/* Arrows inside the grip */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="text-gold"
          >
            <path
              d="M5.5 6L2.5 9L5.5 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 6L15.5 9L12.5 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
