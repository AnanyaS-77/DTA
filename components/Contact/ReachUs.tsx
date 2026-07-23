"use client";

import React from "react";

export default function ReachUs() {
  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_49_672"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_49_672)">
            <path
              d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
              fill="#D61F26"
            />
          </g>
        </svg>
      ),
      title: "Call us",
      subtitle: "Mon - Sat from 8am to 9pm",
      detail: "+91 91084 14481",
      href: "tel:+919108414481",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_49_681"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_49_681)">
            <path
              d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
              fill="#D61F26"
            />
          </g>
        </svg>
      ),
      title: "Mail us",
      subtitle: "We are here to help",
      detail: "you@company.com",
      href: "mailto:you@company.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_49_690"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_49_690)">
            <path
              d="M13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12C12.55 12 13.0208 11.8042 13.4125 11.4125ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
              fill="#D61F26"
            />
          </g>
        </svg>
      ),
      title: "Visit us",
      subtitle: "Visit Our classes",
      detail:
        "Elegance Garden Appartment, 15, 1st Cross Rd, Srinivas Colony, Sudhama Nagar, Bengaluru, Karnataka 560027",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section className="w-full bg-white py-14 px-5 lg:py-30 lg:px-20 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:gap-20 gap-12">
        {/* Header Block */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
            How to Reach Us
          </h2>
          <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-135">
            For over 18 years, Deccan Taekwondo Academy has helped children,
            teenagers, adults, and families transform their lives through
            martial arts.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] p-4  rounded-xl flex flex-col justify-start gap-4"
            >
              <div className="flex flex-col gap-4">
                <div className=" p-2 w-auto">{item.icon}</div>
                <div className=" flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-primary font-primary">
                    {item.title}
                  </h3>
                  <p className="text-md text-secondary font-primary">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-md font-semibold text-primary hover:text-accent transition-colors block leading-relaxed font-primary"
                >
                  {item.detail}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
