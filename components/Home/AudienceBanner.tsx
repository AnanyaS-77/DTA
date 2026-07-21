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
  return (
    <div className="w-full bg-accent h-12 flex justify-center items-center p-2.5 gap-2.5">
      <span className="text-white font-primary text-[18px] font-bold leading-normal flex items-center gap-2.5 whitespace-nowrap overflow-x-auto scrollbar-none py-1">
        {audiences.map((aud, index) => (
          <React.Fragment key={index}>
            <span>{aud}</span>
            {index < audiences.length - 1 && (
              <span className="text-white text-[14px]">•</span>
            )}
          </React.Fragment>
        ))}
      </span>
    </div>
  );
}
