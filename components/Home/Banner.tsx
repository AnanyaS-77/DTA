"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/assets/Home/Banner/Banner.webp";

interface BannerProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  desc?: string;
  buttonText?: string;
  buttonHref?: string;
  phone?: string;
  phoneText?: string;
  image?: any;
}

export default function Banner({
  title = <>Train Strong. Live Fearless.</>,
  subtitle = <span className="block text-accent ">Master Taekwondo.</span>,
  desc = "At Deccan Taekwondo Academy, we don't just teach martial arts we build confidence, discipline, fitness, and champions.",
  buttonText = "Book Free Trial Class",
  buttonHref = "/contact",
  phone = "+919876543210",
  phoneText = "Call Us Now",
  image = bannerImg,
}: BannerProps) {
  return (
    <section className="relative w-full overflow-hidden bg-primary h-[calc(100svh-4rem)] flex items-end ">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={image}
          alt="Deccan Taekwondo Academy Sparring"
          fill
          priority
          placeholder={image === bannerImg ? "blur" : undefined}
          className="object-cover object-center"
        />
      </div>

      {/* Bottom Horizontal Blur Transition (Caveman Mode High Intensity Stack) */}
      <div className="absolute bottom-0 left-0 right-0 h-72 w-full bg-primary blur-[100px] z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 w-full bg-primary blur-[100px] z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 w-full bg-primary blur-[60px] z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 w-full bg-primary blur-[30px] z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-12 w-full bg-primary z-5 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-0 pb-16 pl-20 flex flex-col items-start justify-center">
        <div className="max-w-2xl flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            {/* Main Headings */}
            <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-bold tracking-[-1.44px] sm:tracking-[-1.92px] lg:tracking-[-2.88px] text-white leading-none font-sora">
              {title}
              {subtitle}
            </h1>

            {/* Subtext description */}
            <p className=" text-lg text-zinc-300  font-normal leading-relaxed font-primary max-w-175">
              {desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
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
