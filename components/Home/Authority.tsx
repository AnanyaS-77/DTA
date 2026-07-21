"use client";

import React from "react";
import Image from "next/image";
import logo1 from "@/public/assets/Home/Authorities/Rectangle 46.png";
import logo2 from "@/public/assets/Home/Authorities/Rectangle 47.png";
import logo3 from "@/public/assets/Home/Authorities/Rectangle 49.png";

interface LogoItem {
  src: any;
  alt: string;
  width?: number;
  height?: number;
}

interface AuthorityProps {
  title?: string;
  subtitle?: string;
  logos?: LogoItem[];
}

const defaultLogos = [
  { src: logo1, alt: "World Taekwondo Affiliation", width: 296, height: 167 },
  {
    src: logo2,
    alt: "Kukkiwon World Taekwondo Headquarters",
    width: 296,
    height: 167,
  },
  { src: logo3, alt: "Deccan Taekwondo Academy", width: 296, height: 167 },
];

export default function Authority({
  title = "Proudly Affiliated with World Taekwondo Authorities.",
  subtitle = "A commitment to authentic training, recognized standards, and excellence through official martial arts affiliations.",
  logos = defaultLogos,
}: AuthorityProps) {
  return (
    <section className="w-full bg-white py-30 px-6 sm:px-12 md:px-20  flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-start gap-16">
        {/* Header Block */}
        <div className="flex flex-col items-start text-left gap-2 max-w-4xl">
          <h2 className="text-[56px] font-bold text-primary tracking-tight font-sora leading-[1.15]">
            {title}
          </h2>
          <p className="text-md text-secondary leading-relaxed font-primary font-normal max-w-135">
            {subtitle}
          </p>
        </div>

        {/* Logos Container */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-6 justify-between items-center">
          {logos.map((logo, index) => (
            <div key={index} className="">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 296}
                height={logo.height || 167}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
