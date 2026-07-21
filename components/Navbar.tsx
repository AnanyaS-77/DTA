"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/assets/DTA logo.webp";
import logo1 from "../public/assets/DTA logo1.webp";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white h-16 px-20 justify-between align-center border-b border-zinc-100">
        <div className="flex h-16 items-center justify-between w-full relative">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-1.25 group">
              <img
                src={logo.src}
                alt="DTA Logo Mark"
                style={{
                  width: "47.243px",
                  height: "53px",
                  aspectRatio: "41/46",
                }}
                className=" object-cover "
              />
              <img
                src={logo1.src}
                alt="DTA Logo Text"
                style={{
                  width: "93.097px",
                  height: "28.981px",
                  aspectRatio: "93.10/28.98",
                }}
                className="object-cover "
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative py-1 transition-colors duration-200 text-primary hover:text-accent font-primary text-md font-medium"
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Batch Timings Dropdown */}
            <div
              className=""
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-md  font-medium flex items-center gap-1.5 py-1 transition-colors duration-200 text-primary hover:text-accent font-primary focus:outline-none cursor-pointer"
              >
                Batch Timings
                <svg
                  className={`h-4 w-4 transition-transform duration-200 text-zinc-400 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1.25 bg-white border border-zinc-100 shadow-2xl rounded-2xl z-50 flex flex-col items-start w-196.5 p-10 gap-10 animate-in fade-in slide-in-from-top-1 duration-200"
                  style={{
                    fontFamily: 'var(--family-body, "Plus Jakarta Sans")',
                  }}
                >
                  {/* Heading */}
                  <h3 className="text-[28px] font-bold text-[#929292]">
                    Our Batch Timings
                  </h3>

                  <div className="flex flex-col gap-5 w-full">
                    {/* Section 1 */}
                    <div className="flex flex-col gap-4 items-start text-left w-full border-b border-[#F2F2F2] pb-5">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold text-accent">
                          Adult Fitness Classes
                        </h4>
                        <p className=" text-md text-secondary font-normal  ">
                          Includes, cardio, light weight gym, weight loss
                          training and functional fitness
                        </p>
                      </div>
                      <p
                        className=" font-semibold text-secondary text-lg
                    "
                      >
                        07:00 AM – 09:00 AM
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col gap-4 items-start text-left w-full border-b border-[#F2F2F2] pb-4">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold text-accent">
                          Taekwondo Classes
                        </h4>
                        <p className=" text-md text-secondary font-normal   ">
                          Morning batch for all ages
                        </p>
                      </div>
                      <p
                        className=" font-semibold text-secondary text-lg
                    "
                      >
                        06:00 AM – 07:00 AM
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="flex flex-col gap-4 items-start text-left w-full">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold text-accent">
                          Evening Batch Classes
                        </h4>
                        <p className=" text-md text-secondary font-normal  ">
                          Suitable for kids, teens, adults, and working
                          professionals.
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 w-full">
                        <div
                          className="flex items-center gap-4 font-semibold text-secondary text-lg
                      "
                        >
                          <span>03:00 PM – 04:00 PM</span>
                          <span className="text-zinc-300 font-light">|</span>
                          <span>04:00 PM – 05:00 PM</span>
                          <span className="text-zinc-300 font-light">|</span>
                          <span>05:00 PM – 06:00 PM</span>
                        </div>
                        <div className="flex items-center gap-4 text-lg font-semibold text-zinc-900">
                          <span>06:00 PM – 07:00 PM</span>
                          <span className="text-zinc-300 font-light">|</span>
                          <span>07:00 PM – 08:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-lg font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md shadow-red-600/10 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center h-12 p-4 gap-2 rounded-lg bg-accent backdrop-blur-[20px]"
            >
              Talk to Us
              <svg
                className="h-4 w-4"
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
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 focus:outline-none dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-200/40 dark:border-zinc-800/40 bg-white dark:bg-zinc-950 transition-all duration-300">
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center rounded-lg px-3 py-2 text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Batch Timings sub-info */}
              <div className="px-3 py-2 border-t border-zinc-100 mt-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Batch Timings
                </span>
                <div className="space-y-2 pl-2">
                  <div className="text-sm">
                    <span className="font-semibold block text-zinc-700">
                      Morning Batch:
                    </span>
                    <span className="text-xs text-zinc-500">
                      6:00 AM - 8:00 AM
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold block text-zinc-700">
                      Evening Batch:
                    </span>
                    <span className="text-xs text-zinc-500">
                      4:00 PM - 6:00 PM
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold block text-zinc-700">
                      Weekend Special:
                    </span>
                    <span className="text-xs text-zinc-500">
                      9:00 AM - 12:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 pb-2 border-t border-zinc-100 dark:border-zinc-900 mt-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-sm font-semibold text-white shadow-md shadow-red-600/10 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center h-12 p-4 gap-2.5 rounded-(--CR-Medium,8px) bg-accent backdrop-blur-[20px]"
                >
                  Talk to Us
                  <svg
                    className="h-4 w-4"
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
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Dynamic Dropdown Backdrop Overlay */}
      {dropdownOpen && (
        <div className="fixed inset-0 top-16 bg-[#070707]/70 backdrop-blur-[10px] z-40 pointer-events-none transition-all duration-300 animate-in fade-in" />
      )}
    </>
  );
}
