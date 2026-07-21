"use client";

import React, { useState, useEffect, useRef } from "react";

interface TestimonialItem {
  text: string;
  author: string;
}

interface TestimonialProps {
  title?: React.ReactNode;
  subtitle?: string;
  items?: TestimonialItem[];
}

const defaultTestimonials = [
  {
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
    author: "Jackson",
  },
  {
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
    author: "Jackson",
  },
  {
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
    author: "Jackson",
  },
  {
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
    author: "Jackson",
  },
  {
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
    author: "Jackson",
  },
  {
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
    author: "Jackson",
  },
];

export default function Testimonial({
  title = (
    <>
      Trusted By Students. <br />
      Recommended By Families.
    </>
  ),
  subtitle = "For over 18 years, Deccan Taekwondo Academy has helped children, teenagers, adults, and families transform their lives through martial arts.",
  items = defaultTestimonials,
}: TestimonialProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [stepWidth, setStepWidth] = useState(494); // default desktop card + gap (474 + 20)

  const updateScrollBounds = () => {
    if (containerRef.current && trackRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const trackWidth = trackRef.current.scrollWidth;
      const style = window.getComputedStyle(containerRef.current);
      const paddingLeft = parseFloat(style.paddingLeft) || 0;

      const calculatedMax = Math.max(
        0,
        trackWidth + paddingLeft - containerWidth,
      );
      setMaxScroll(calculatedMax);

      const firstChild = trackRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.clientWidth;
        setStepWidth(cardWidth + 20); // card width + gap (20px)
      }
    }
  };

  useEffect(() => {
    updateScrollBounds();
    const timer = setTimeout(updateScrollBounds, 100);

    window.addEventListener("resize", updateScrollBounds);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateScrollBounds);
    };
  }, []);

  const handlePrev = () => {
    updateScrollBounds();
    setScrollX((prev) => Math.max(0, prev - stepWidth));
  };

  const handleNext = () => {
    updateScrollBounds();
    setScrollX((prev) => Math.min(maxScroll, prev + stepWidth));
  };

  return (
    <section className="w-full bg-white pt-30 pb-19 border-zinc-100 flex flex-col gap-16 overflow-hidden">
      {/* Header Block: Aligned with the standard max-w-7xl margins */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start text-left gap-2">
        <h2 className="text-[56px] font-bold text-primary tracking-tight font-sora leading-[1.15]">
          {title}
        </h2>
        <p className="text-md text-secondary leading-relaxed font-primary font-normal max-w-162.5">
          {subtitle}
        </p>
      </div>

      {/* Slider Container: Starts aligned with the container margin on left, but runs to 100% viewport width on right */}
      <div
        ref={containerRef}
        className="w-full flex flex-col gap-6 overflow-visible relative"
        style={{
          paddingLeft: "max(0px, calc((100% - 1280px) / 2))",
        }}
      >
        {/* Inner Cards flex container */}
        <div
          ref={trackRef}
          className="flex gap-5 transition-[left] duration-500 ease-in-out relative [--card-width:280px] sm:[--card-width:380px] lg:[--card-width:474px] pr-20"
          style={{
            left: `-${scrollX}px`,
          }}
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              className="shrink-0 flex flex-col gap-5 text-left bg-[#F2F2F2] border border-[#D6D6D6] rounded-lg p-4 justify-between transition-colors duration-300 hover:bg-[#FBE9E9] hover:border-[#EC989B]"
              style={{
                width: "var(--card-width)",
              }}
            >
              <p className="text-lg text-primary leading-relaxed font-primary font-medium">
                {t.text}
              </p>
              <h4 className="text-lg font-semibold text-accent font-primary">
                {t.author}
              </h4>
            </div>
          ))}
        </div>

        {/* Navigation Arrows at Bottom Center (aligned with standard layout offset) */}
        <div
          className="flex justify-center items-center gap-1"
          style={{
            paddingRight: "max(0px, calc((100% - 1280px) / 2))",
          }}
        >
          <button
            onClick={handlePrev}
            disabled={scrollX <= 0}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
              scrollX <= 0
                ? "border-zinc-200 text-zinc-300"
                : "border-zinc-300 text-primary hover:bg-zinc-50 cursor-pointer"
            }`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={scrollX >= maxScroll - 1}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
              scrollX >= maxScroll - 1
                ? "border-zinc-200 text-zinc-300"
                : "border-zinc-300 text-primary hover:bg-zinc-50 cursor-pointer"
            }`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
