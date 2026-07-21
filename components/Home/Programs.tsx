"use client";

import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/Home/Programs/image1.png";
import image2 from "@/public/assets/Home/Programs/image2.png";
import image3 from "@/public/assets/Home/Programs/image3.png";
import image4 from "@/public/assets/Home/Programs/image4.png";

interface ProgramItem {
  title: string;
  desc: string;
  image: any;
  isAccent?: boolean;
}

interface ProgramsProps {
  title?: React.ReactNode;
  subtitle?: string;
  items?: ProgramItem[];
  className?: string;
}

const defaultPrograms: ProgramItem[] = [
  {
    title: "Kids Taekwondo Classes (Age 3+)",
    desc: "Help your child build: Confidence, discipline, focus, respect, strength, flexibility. Perfect for parents looking for kids martial arts classes in Bangalore.",
    image: image1,
    isAccent: false,
  },
  {
    title: "Teen Martial Arts Training",
    desc: "Build athletic performance, self-confidence, leadership, and competitive spirit. Ideal for school and college students.",
    image: image2,
    isAccent: false,
  },
  {
    title: "Adult Self Defence & Fitness",
    desc: "Learn practical self defence while improving: Strength, stamina, mobility, weight loss, mental focus. Perfect for working professionals, mothers, and beginners",
    image: image3,
    isAccent: true,
  },
  {
    title: "Senior Fitness & Movement Training",
    desc: "Low impact training designed for: mobility, balance, flexibility, functional strength",
    image: image4,
    isAccent: false,
  },
];

function HoverRow({ item, idx }: { item: ProgramItem; idx: number }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="flex items-center text-left"
      style={{
        paddingTop: "24px",
        paddingBottom: "24px",
        borderTop: idx > 0 ? "1px solid #f2f2f2" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div
        className="w-37.5 h-37.5 flex items-center justify-center shrink-0 overflow-hidden pr-6"
        style={{ borderRight: "1px solid #f2f2f2" }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={150}
          height={150}
          className="object-contain max-w-full max-h-full"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4 justify-center pl-6">
        <h3
          className="text-2xl font-bold font-primary leading-tight transition-colors duration-300"
          style={{ color: hovered ? "#d61f26" : "#111111" }}
        >
          {item.title}
        </h3>
        <p className="text-md text-secondary leading-relaxed font-primary font-medium">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Programs({
  title = (
    <>
      Programs <br />
      Designed For <br />
      Every Age
    </>
  ),
  subtitle = "Deccan Taekwondo Academy has been shaping lives through the power of Korean martial arts for over 18 years.",
  items = defaultPrograms,
  className = "",
}: ProgramsProps) {
  return (
    <section
      className={`w-full bg-white py-30 px-6 sm:px-12 md:px-20 border-t border-zinc-100 flex justify-center ${className}`}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between items-center">
        {/* Left Column: Heading & Subtitle */}
        <div className="flex flex-col gap-2 text-left w-full lg:w-[40.625%]">
          <h2 className="text-[56px] font-bold text-primary tracking-tight font-sora leading-[1.15]">
            {title}
          </h2>
          <p className="text-md text-secondary leading-relaxed font-primary font-normal max-w-125">
            {subtitle}
          </p>
        </div>

        {/* Right Column: Stacking Program Rows */}
        <div className="w-full lg:w-[56.25%] flex flex-col">
          {items.map((item, idx) => (
            <HoverRow key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
