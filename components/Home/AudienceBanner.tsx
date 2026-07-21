"use client";

import React from "react";

interface AudienceBannerProps {
  audiences?: string[];
}

const defaultAudiences = [
  "For Kids",
  "Teens",
  "Adults",
  "Working Professionals",
  "Mothers",
  "Seniors",
];

export default function AudienceBanner({
  audiences = defaultAudiences,
}: AudienceBannerProps) {
  const items = [...audiences, ...audiences, ...audiences, ...audiences];

  return (
    <div className="w-full bg-accent h-12 flex justify-start items-center overflow-hidden relative select-none">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track flex items-center gap-4 text-white font-primary text-[16px] sm:text-[18px] font-bold leading-normal">
        {items.map((aud, index) => (
          <React.Fragment key={index}>
            <span className="shrink-0">{aud}</span>
            <span className="text-white/80 text-[14px] shrink-0">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
