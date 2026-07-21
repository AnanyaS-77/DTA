"use client";

import Image from "next/image";
import image1 from "@/public/assets/Home/Stats/image 1.png";
import image2 from "@/public/assets/Home/Stats/image 2.png";
import image3 from "@/public/assets/Home/Stats/image 3.png";

export default function Stats() {
  return (
    <section className="w-full bg-black">
      <div className="w-full bg-white py-30 px-6 sm:px-12 md:px-20 border-b border-zinc-100 rounded-t-[64px] justify-center flex">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-10 items-center lg:items-stretch">
          {/* Left Column: Heading and Subtext */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left gap-2 ">
            <h2 className="text-[56px] font-bold text-primary tracking-tight font-sora leading-[1.15]">
              Bangalore’s Home for Modern Martial Arts
            </h2>
            <p className="text-md text-secondary leading-relaxed font-primary font-normal max-w-135">
              From beginners to champions, we train kids, teens, adults, and
              professionals through expert Korean martial arts coaching and
              disciplined fitness programs.
            </p>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1: Medal Winning Academy */}
            <div className="bg-[#F9F9F9] border border-[#D6D6D6] rounded-[20px] flex flex-col items-start text-left gap-6.5 px-4 py-12 w-76.25 h-98.5">
              {/* Premium Gold Medal Image */}
              <div className="flex">
                <Image
                  src={image1}
                  alt="Medal Winning Academy Since 2008"
                  width={119}
                  height={204}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold font-sora text-primary leading-snug">
                Medal Winning Academy Since 2008
              </h3>
            </div>

            {/* Column 2: Two Stacked Cards */}
            <div className="flex flex-col gap-5">
              {/* Card 2: Happy Students */}
              <div className="bg-[#F9F9F9] border border-[#D6D6D6] rounded-[20px] px-4 py-2.5 flex flex-col items-start w-76.25 h-46.75 gap-3.5">
                {/* Happy Student Image */}
                <div className="mb-4">
                  <Image
                    src={image2}
                    alt="10,000+ Happy Students"
                    width={98}
                    height={86}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold font-sora text-primary leading-snug">
                  10,000+
                  <br />
                  Happy Students
                </h3>
              </div>

              {/* Card 3: Location */}
              <div className="bg-[#F9F9F9] border border-[#D6D6D6] rounded-[20px] px-4 py-2.5 flex flex-col items-start w-76.25 h-46.75 gap-3.5">
                {/* Location/Building Image */}
                <div className="mb-4">
                  <Image
                    src={image3}
                    alt="Located in Shantinagar, Bangalore"
                    width={98}
                    height={86}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold font-sora text-primary leading-snug">
                  Located in the heart of
                  <br />
                  Shantinagar, Bangalore
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
