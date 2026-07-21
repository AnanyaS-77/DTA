"use client";

import React from "react";
import Link from "next/link";

interface JourneyProps {
  title?: React.ReactNode;
  desc?: string;
  buttonText?: string;
  buttonHref?: string;
  phone?: string;
  phoneText?: string;
}

export default function Journey({
  title = (
    <>
      Start Your <span className="text-accent">Martial Arts</span> <br />
      <span className="text-accent">Journey</span> Today!
    </>
  ),
  desc = "Whether you want to learn self defence, lose weight, build confidence, or compete professionally, your journey starts here.",
  buttonText = "Book Free Trial Class",
  buttonHref = "/contact",
  phone = "+919876543210",
  phoneText = "Call Us Now",
}: JourneyProps) {
  return (
    <section
      className="w-full py-24 px-6 sm:px-12 md:px-20 flex justify-center items-center text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(270deg, #0F0F0F -0.46%, #000 99.93%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center select-none opacity-80">
        <svg
          width="756"
          height="654"
          viewBox="0 0 756 654"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-189 h-auto"
        >
          <g filter="url(#filter0_f_317_1434)">
            <circle cx="378" cy="327" r="78" fill="#C30000" />
          </g>
          <defs>
            <filter
              id="filter0_f_317_1434"
              x="0"
              y="-51"
              width="756"
              height="756"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_317_1434"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="w-full max-w-7xl flex flex-col items-center justify-center relative z-10">
        {/* Same exact div structure requested */}
        <div className="max-w-2xl flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-4 items-center">
            {/* Main Headings */}
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-[-2.24px] text-white leading-tight font-sora">
              {title}
            </h2>

            {/* Subtext description */}
            <p className="text-lg text-zinc-300 font-normal leading-relaxed font-primary max-w-162.5">
              {desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2  w-full sm:w-auto">
            <Link
              href={buttonHref}
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#111] font-bold px-6 py-4 rounded-lg text-lg hover:bg-accent hover:text-white transition-all duration-200 active:scale-[0.98] shadow-lg hover:shadow-xl font-primary"
            >
              {buttonText}
              <svg
                className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center bg-white/20 hover:bg-[#FBE9E9] text-white hover:text-accent font-semibold p-4 rounded-lg border border-white/20 hover:border-accent transition-all duration-200 active:scale-[0.98] text-lg font-primary"
            >
              {phoneText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
