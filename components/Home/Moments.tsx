"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/Home/Moments/Image1.png";
import img2 from "@/public/assets/Home/Moments/Image2.png";
import img3 from "@/public/assets/Home/Moments/Image3.png";
import img4 from "@/public/assets/Home/Moments/Image4.png";
import img5 from "@/public/assets/Home/Moments/Image5.png";
import img6 from "@/public/assets/Home/Moments/Image6.png";
import img7 from "@/public/assets/Home/Moments/Image7.png";
import img8 from "@/public/assets/Home/Moments/Image8.png";
import img9 from "@/public/assets/Home/Moments/Image9.png";
import img10 from "@/public/assets/Home/Moments/Image10.png";
import img11 from "@/public/assets/Home/Moments/Image11.png";
import img12 from "@/public/assets/Home/Moments/Image12.png";
import img13 from "@/public/assets/Home/Moments/Image13.png";
import img14 from "@/public/assets/Home/Moments/Image14.png";
import img15 from "@/public/assets/Home/Moments/Image15.png";
import img16 from "@/public/assets/Home/Moments/Image16.png";
import img17 from "@/public/assets/Home/Moments/Image17.png";
import img18 from "@/public/assets/Home/Moments/Image18.png";
import img19 from "@/public/assets/Home/Moments/Image19.png";
import img20 from "@/public/assets/Home/Moments/Image20.png";
import img21 from "@/public/assets/Home/Moments/Image21.png";
import img22 from "@/public/assets/Home/Moments/Image22.png";
import img23 from "@/public/assets/Home/Moments/Image23.png";
import img24 from "@/public/assets/Home/Moments/Image24.png";
import img25 from "@/public/assets/Home/Moments/Image25.png";
import img26 from "@/public/assets/Home/Moments/Image26.png";

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
    <section className="w-full bg-white py-30 px-6 sm:px-12 md:px-20 flex justify-center border-zinc-100">
      <div className="w-full max-w-7xl flex flex-col gap-16">
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
        <div className="w-full flex flex-col lg:flex-row justify-between items-center  gap-6 text-left">
          <h2 className="text-[56px] font-bold text-primary tracking-tight font-sora leading-[1.1]">
            {title}
          </h2>
          <p className="text-md text-secondary leading-relaxed font-primary font-normal max-w-150">
            {subtitle}
          </p>
        </div>

        {/* Main Images Div: Horizontal Scrollable Masonry Collage with unique padding-top per column */}
        <div className="w-full flex gap-2 overflow-x-auto hide-scrollbar">
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
