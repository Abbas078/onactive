"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2, AlertCircle } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster: string;
  title: string;
  caption?: string;
  advisory?: string;
  aspectRatio?: "16/9" | "9/16" | "4/3";
  className?: string;
}

export function VideoPlayer({
  src,
  poster,
  title,
  caption,
  advisory,
  aspectRatio = "9/16",
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[#DCE5EF] bg-[#0A1C33] shadow-md transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {/* Video Element */}
      <div
        className="relative w-full cursor-pointer overflow-hidden bg-black"
        style={{
          aspectRatio: aspectRatio === "9/16" ? "9/16" : aspectRatio === "16/9" ? "16/9" : "4/3",
        }}
        onClick={togglePlay}
        aria-label={`${title} - Click to ${isPlaying ? "pause" : "play"}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            togglePlay();
          }
        }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          className="h-full w-full object-contain"
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />

        {/* Poster overlay before initial play */}
        {!hasStarted && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 transition-opacity duration-300">
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-20 flex flex-col items-center gap-3 p-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F47721] text-white shadow-xl ring-4 ring-white/30 transition-transform duration-300 hover:scale-110">
                <Play className="ml-1 h-7 w-7 fill-white" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-white uppercase drop-shadow">
                Click to Watch
              </span>
            </div>
          </div>
        )}

        {/* Center play/pause indicator on hover while active */}
        {hasStarted && !isPlaying && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F47721] text-white shadow-lg ring-4 ring-white/30">
              <Play className="ml-0.5 h-6 w-6 fill-white" />
            </span>
          </div>
        )}

        {/* Bottom Control Bar */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-white transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur transition hover:bg-[#F47721]"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="ml-0.5 h-4 w-4 fill-white" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur transition hover:bg-white/30"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-red-400" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={handleFullscreen}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur transition hover:bg-white/30"
            aria-label="Toggle fullscreen"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Caption & Advisory */}
      <div className="bg-white p-4">
        <h4 className="text-sm font-bold text-[#102D4F] line-clamp-1">{title}</h4>
        {caption && (
          <p className="mt-1 text-xs text-[#52647A] line-clamp-2 leading-relaxed">
            {caption}
          </p>
        )}
        {advisory && (
          <div className="mt-2.5 flex items-start gap-1.5 rounded-lg bg-[#F5F8FB] border border-[#DCE5EF] p-2 text-[11px] text-[#52647A]">
            <AlertCircle className="h-3.5 w-3.5 text-[#F47721] shrink-0 mt-0.5" />
            <span className="leading-tight">{advisory}</span>
          </div>
        )}
      </div>
    </div>
  );
}

