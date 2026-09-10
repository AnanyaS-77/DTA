"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "@/public/assets/Home/MartialArts/image1.webp";
import image2 from "@/public/assets/Home/MartialArts/image2.jpeg";
import image3 from "@/public/assets/Home/MartialArts/image3.webp";
import image4 from "@/public/assets/Home/MartialArts/image4.webp";
import image5 from "@/public/assets/Home/MartialArts/image5.jpeg";
import image6 from "@/public/assets/Home/MartialArts/image6.webp";

interface Program {
  title: string;
  desc: string;
  image: string | StaticImageData;
}

interface MartialArtsProps {
  title?: string;
  subtitle?: string;
  programs?: Program[];
}

const martialArtsPrograms = [
  {
    title: "Taekwondo Training",
    desc: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
    image: image1,
  },
  {
    title: "Self Defence Training",
    desc: "Learn practical, real-life self-defense skills that build confidence, improve personal safety, and prepare women, professionals, teenagers, and beginners to handle everyday situations effectively.",
    image: image2,
  },
  {
    title: "Poomsae Training",
    desc: "Master traditional Taekwondo forms with precision, balance, control, and disciplined movement through structured practice and progressive training.",
    image: image3,
  },
  {
    title: "Kyorugi Training",
    desc: "Olympic-style sparring focused on speed, strategy, agility, quick decision-making, and competition readiness through structured training and real-match scenarios.",
    image: image4,
  },
  {
    title: "Basic Gymnastics",
    desc: "Improve flexibility, coordination, body balance, and athletic movement.",
    image: image5,
  },
  {
    title: "Fitness & Weight Management",
    desc: "Adult fitness sessions includes,light weight training,cardio conditioning, fat loss training, strength building and mobility work.",
    image: image6,
  },
];

export default function MartialArts({
  title = "Complete Training Under One Roof",
  subtitle = "Expert-led training in Taekwondo, self-defence, poomsae, kyorugi, fitness, and gymnastics tailored for kids, teens, adults, and working professionals.",
  programs = martialArtsPrograms,
}: MartialArtsProps) {
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
    <section className="w-full bg-white py-14 px-5 lg:py-30 lg:px-20 flex flex-col gap-12 md:gap-16 overflow-hidden">
      {/* Header Block: Aligned with the standard max-w-7xl margins */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start text-left gap-2">
        <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
          {title}
        </h2>
        <p className="text-[14px] lg:text-[16px] w-full text-secondary leading-relaxed font-primary font-normal max-w-150">
          {subtitle}
        </p>
      </div>

      {/* Slider Container: Starts aligned with the container margin on left, but runs to 100% viewport width on right */}
      <div
        ref={containerRef}
        className="w-full flex flex-col gap-6 overflow-visible relative  pr-0"
        style={{
          paddingLeft: "max(0px, calc((100% - 1280px) / 2))",
        }}
      >
        {/* Inner Cards flex container */}
        <div
          ref={trackRef}
          className="flex gap-5 transition-[left] duration-500 ease-in-out relative [--card-width:280px] sm:[--card-width:380px] lg:[--card-width:474px]  lg:pl-0"
          style={{
            left: `-${scrollX}px`,
          }}
        >
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="shrink-0 flex flex-col gap-4 text-left"
              style={{ width: "var(--card-width)" }}
            >
              {/* Image Wrapper */}
              <div className="relative aspect-414/277 w-full rounded-lg overflow-hidden ">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content Wrapper */}
              <div className="flex flex-col gap-2">
                <h3 className="lg:text-2xl text-xl font-bold font-primary text-primary leading-tight">
                  {program.title}
                </h3>
                <p className="lg:text-lg text-md text-secondary leading-relaxed font-primary font-medium">
                  {program.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows at Bottom Center (centered on mobile, layout-aligned on desktop) */}
        <div className="w-full flex justify-center items-center gap-1">
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
