"use client";

import { ImageOff } from "lucide-react";

interface PlaceholderImageProps {
  className?: string;
  label?: string;
}

export default function PlaceholderImage({ className = "", label }: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-tertiary ${className}`}
    >
      <ImageOff className="w-12 h-12 text-text-muted mb-2" />
      {label && <span className="text-xs text-text-muted font-accent">{label}</span>}
    </div>
  );
}
