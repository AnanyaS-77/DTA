"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/Home/Moments/Image1.webp";
import img2 from "@/public/assets/Home/Moments/Image2.webp";
import img3 from "@/public/assets/Home/Moments/Image3.webp";
import img4 from "@/public/assets/Home/Moments/Image4.webp";
import img5 from "@/public/assets/Home/Moments/Image5.webp";
import img6 from "@/public/assets/Home/Moments/Image6.webp";
import img7 from "@/public/assets/Home/Moments/Image7.webp";
import img8 from "@/public/assets/Home/Moments/Image8.webp";
import img9 from "@/public/assets/Home/Moments/Image9.webp";
import img10 from "@/public/assets/Home/Moments/Image10.webp";
import img11 from "@/public/assets/Home/Moments/Image11.webp";
import img12 from "@/public/assets/Home/Moments/Image12.webp";
import img13 from "@/public/assets/Home/Moments/Image13.webp";
import img14 from "@/public/assets/Home/Moments/Image14.webp";
import img15 from "@/public/assets/Home/Moments/Image15.webp";
import img16 from "@/public/assets/Home/Moments/Image16.webp";
import img17 from "@/public/assets/Home/Moments/Image17.webp";
import img18 from "@/public/assets/Home/Moments/Image18.webp";
import img19 from "@/public/assets/Home/Moments/Image19.webp";
import img20 from "@/public/assets/Home/Moments/Image20.webp";
import img21 from "@/public/assets/Home/Moments/Image21.webp";
import img22 from "@/public/assets/Home/Moments/Image22.webp";
import img23 from "@/public/assets/Home/Moments/Image23.webp";
import img24 from "@/public/assets/Home/Moments/Image24.webp";
import img25 from "@/public/assets/Home/Moments/Image25.webp";
import img26 from "@/public/assets/Home/Moments/Image26.webp";

interface MomentCard {
  height: number;
  img: any;
}

interface MomentColumn {
  pt: number;
  w: number;
  cards: MomentCard[];
}

interface MomentsProps {
  title?: React.ReactNode;
  subtitle?: string;
  columns?: MomentColumn[];
}

const defaultColumns = [
  // Column 1
  {
    pt: 63,
    w: 138.216,
    cards: [
      { height: 156, img: img1 },
      { height: 164, img: img2 },
    ],
  },
  // Column 2
  {
    pt: 107,
    w: 115.18,
    cards: [
      { height: 154, img: img3 },
      { height: 70, img: img4 },
      { height: 70, img: img5 },
    ],
  },
  // Column 3
  {
    pt: 90,
    w: 115.18,
    cards: [
      { height: 185, img: img6 },
      { height: 106, img: img7 },
    ],
  },
  // Column 4
  {
    pt: 36,
    w: 115.18,
    cards: [
      { height: 106, img: img8 },
      { height: 106, img: img9 },
      { height: 106, img: img10 },
    ],
  },
  // Column 5
  {
    pt: 0,
    w: 115.18,
    cards: [
      { height: 156, img: img11 },
      { height: 106, img: img12 },
      { height: 70, img: img13 },
    ],
  },
  // Column 6
  {
    pt: 63,
    w: 122.191,
    cards: [
      { height: 185, img: img14 },
      { height: 106, img: img15 },
    ],
  },
  // Column 7
  {
    pt: 99,
    w: 122.191,
    cards: [
      { height: 106, img: img16 },
      { height: 106, img: img17 },
      { height: 106, img: img18 },
    ],
  },
  // Column 8
  {
    pt: 78,
    w: 122.191,
    cards: [
      { height: 154, img: img19 },
      { height: 70, img: img20 },
      { height: 70, img: img21 },
    ],
  },
  // Column 9
  {
    pt: 43,
    w: 122.191,
    cards: [
      { height: 107, img: img22 },
      { height: 82, img: img23 },
      { height: 140, img: img24 },
    ],
  },
  // Column 10
  {
    pt: 49,
    w: 122.191,
    cards: [
      { height: 141, img: img25 },
      { height: 95, img: img26 },
    ],
  },
];

const mobileColumns = [
  // 1st column: 4 images, width 69px
  {
    pt: 50,
    w: 69,
    cards: [
      { height: 78, img: img1 },
      { height: 82, img: img2 },
      { height: 77, img: img3 },
      { height: 70, img: img4 },
    ],
  },
  // 2nd column: 6 images, width 57px
  {
    pt: 72,
    w: 57,
    cards: [
      { height: 65, img: img5 },
      { height: 75, img: img6 },
      { height: 55, img: img7 },
      { height: 55, img: img8 },
      { height: 55, img: img9 },
      { height: 55, img: img10 },
    ],
  },
  // 3rd column: 5 images, width 56px
  {
    pt: 63,
    w: 56,
    cards: [
      { height: 75, img: img11 },
      { height: 55, img: img12 },
      { height: 48, img: img13 },
      { height: 85, img: img14 },
      { height: 55, img: img15 },
    ],
  },
  // 4th column: 6 images, width 69px
  {
    pt: 34,
    w: 69,
    cards: [
      { height: 58, img: img16 },
      { height: 58, img: img17 },
      { height: 58, img: img18 },
      { height: 78, img: img19 },
      { height: 48, img: img20 },
      { height: 48, img: img21 },
    ],
  },
  // 5th column: 5 images, width 69px
  {
    pt: 0,
    w: 69,
    cards: [
      { height: 60, img: img22 },
      { height: 52, img: img23 },
      { height: 70, img: img24 },
      { height: 70, img: img25 },
      { height: 55, img: img26 },
    ],
  },
];

export default function Moments({
  title = (
    <>
      Moments of Discipline <br />
      and Achievement
    </>
  ),
  subtitle = "Expert-led training in Taekwondo, self-defence, poomsae, kyorugi, fitness, and gymnastics tailored for kids, teens, adults, and working professionals.",
  columns = defaultColumns,
}: MomentsProps) {
  return (
    <section className="w-full bg-white py-14 px-5 lg:py-30 lg:px-20 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:gap-16 gap-12">
        {/* Scoped CSS to hide scrollbar */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* Header Block */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start  gap-6 text-left">
          <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.1] sm:self-start">
            {title}
          </h2>
          <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-150 sm:self-start">
            {subtitle}
          </p>
        </div>

        {/* Mobile & Tablet View (< 1024px): 5 columns scaling dynamically across mobile, sm, and md tablet screens */}
        <div className="w-full flex lg:hidden gap-2 sm:gap-3 md:gap-4 justify-between overflow-x-auto hide-scrollbar">
          {mobileColumns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-2 sm:gap-3 flex-1 min-w-14 sm:min-w-25 md:min-w-30 h-full shrink-0 sm:shrink"
              style={{ paddingTop: `${col.pt}px` }}
            >
              {col.cards.map((card, cardIdx) => (
                <div
                  key={cardIdx}
                  className="w-full relative rounded-md sm:rounded-lg overflow-hidden bg-zinc-100 shrink-0"
                  style={{ aspectRatio: `${col.w} / ${card.height}` }}
                >
                  <Image
                    src={card.img}
                    alt={`Moment mobile image ${colIdx + 1}-${cardIdx + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop View: 10 columns */}
        <div className="w-full hidden lg:flex gap-2 overflow-x-auto hide-scrollbar">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-3 h-full shrink-0"
              style={{ paddingTop: `${col.pt}px`, width: `${col.w}px` }}
            >
              {col.cards.map((card, cardIdx) => (
                <div
                  key={cardIdx}
                  className="w-full relative rounded-xl overflow-hidden bg-zinc-100 shrink-0"
                  style={{ height: `${card.height}px` }}
                >
                  <Image
                    src={card.img}
                    alt={`Moment collage image ${colIdx + 1}-${cardIdx + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
