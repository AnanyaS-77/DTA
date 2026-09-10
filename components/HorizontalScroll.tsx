"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/public/assets/Home/Moments/Image27.jpg";
import img2 from "@/public/assets/Home/Moments/Image28.jpg";
import img3 from "@/public/assets/Home/Moments/Image29.jpg";
import img4 from "@/public/assets/Home/Moments/Image30.jpg";
import img5 from "@/public/assets/Home/Moments/Image31.jpg";
import img6 from "@/public/assets/Home/Moments/Image32.jpg";
import img7 from "@/public/assets/Home/Moments/Image33.jpg";
import img8 from "@/public/assets/Home/Moments/Image34.jpg";
import img9 from "@/public/assets/Home/Moments/Image35.jpg";
import img10 from "@/public/assets/Home/Moments/Image36.jpg";
import img11 from "@/public/assets/Home/Moments/Image37.jpg";
import img12 from "@/public/assets/Home/Moments/Image38.jpg";
import img13 from "@/public/assets/Home/Moments/Image39.jpg";
import img14 from "@/public/assets/Home/Moments/Image40.jpg";
import img15 from "@/public/assets/Home/Moments/Image41.jpg";
import img16 from "@/public/assets/Home/Moments/Image42.jpeg";
import img17 from "@/public/assets/Home/Moments/Image43.jpeg";
import img18 from "@/public/assets/Home/Moments/Image44.jpeg";
import img19 from "@/public/assets/Home/Moments/Image45.jpeg";
import img20 from "@/public/assets/Home/Moments/Image46.jpeg";
import img21 from "@/public/assets/Home/Moments/Image47.jpeg";
import img22 from "@/public/assets/Home/Moments/Image48.jpg";
import img23 from "@/public/assets/Home/Moments/Image49.jpg";
import img24 from "@/public/assets/Home/Moments/Image50.jpg";
import img25 from "@/public/assets/Home/Moments/Image51.jpg";

interface MomentCard {
  height: number;
  img: string | StaticImageData;
}

interface MomentColumn {
  pt: number;
  w: number;
  cards: MomentCard[];
}

interface HorizontalScrollProps {
  children?: React.ReactNode;
  className?: string;
  gap?: number;
  columns?: MomentColumn[];
}

const defaultColumns: MomentColumn[] = [
  { pt: 63, w: 138.216, cards: [{ height: 156, img: img1 }, { height: 164, img: img2 }] },
  { pt: 107, w: 115.18, cards: [{ height: 154, img: img3 }, { height: 70, img: img4 }, { height: 70, img: img5 }] },
  { pt: 90, w: 115.18, cards: [{ height: 185, img: img6 }, { height: 106, img: img7 }] },
  { pt: 36, w: 115.18, cards: [{ height: 106, img: img8 }, { height: 106, img: img9 }, { height: 106, img: img10 }] },
  { pt: 0, w: 115.18, cards: [{ height: 156, img: img11 }, { height: 106, img: img12 }, { height: 70, img: img13 }] },
  { pt: 63, w: 122.191, cards: [{ height: 185, img: img14 }, { height: 106, img: img15 }] },
  { pt: 99, w: 122.191, cards: [{ height: 106, img: img16 }, { height: 106, img: img17 }, { height: 106, img: img18 }] },
  { pt: 78, w: 122.191, cards: [{ height: 154, img: img19 }, { height: 70, img: img20 }, { height: 70, img: img21 }] },
  { pt: 43, w: 122.191, cards: [{ height: 107, img: img22 }, { height: 82, img: img23 }] },
  { pt: 49, w: 122.191, cards: [{ height: 141, img: img24 }, { height: 95, img: img25 }] },
];

export default function HorizontalScroll({
  children,
  className = "",
  gap = 2,
  columns = defaultColumns,
}: HorizontalScrollProps) {
  return (
    <section className="w-full bg-white py-14 px-5 lg:py-30 lg:px-20 flex justify-center">
      <div className="w-full max-w-7xl">
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <div
          className={`w-full hidden lg:flex overflow-x-auto hide-scrollbar ${className}`}
          style={{ gap: `${gap * 0.25}rem` }}
        >
          {children
            ? children
            : columns.map((col, colIdx) => (
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
