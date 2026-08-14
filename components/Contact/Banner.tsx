"use client";

import React, { useState } from "react";
import Image from "next/image";
import contactBannerImg from "@/public/assets/Contact/Image.webp";

export default function ContactBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", mobile: "", topic: "", message: "" });
    }, 3000);
  };

  const topics = [
    "General Inquiry",
    "Class Timings",
    "Admissions",
    "Fees & Pricing",
    "Trial Class",
    "Other",
  ];

  return (
    <section
      className="w-full mx-auto flex flex-col lg:flex-row font-primary min-h-[calc(100vh-4rem)]"
      style={{ maxWidth: "1440px" }}
    >
      {/* Left Panel – Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col py-14 px-5 lg:py-20 lg:px-20">
        <div className="w-full flex flex-col md:gap-11.25 gap-8">
          {/* Header Block */}
          <div className="flex flex-col gap-2">
            {/* Heading */}
            <h1 className="text-[36px] lg:text-[56px] font-bold text-primary tracking-[-1.44px] lg:tracking-tight font-sora leading-[1.15]">
              Get In Touch
              <br />
              With Us
            </h1>
            <p className="text-[14px] lg:text-[16px] text-secondary leading-relaxed font-primary font-normal max-w-125">
              Have questions about classes, timings, or admissions?
              <br />
              Our team is here to help you begin your martial arts journey.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center">
              <svg
                className="mx-auto h-12 w-12 text-emerald-500 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-base font-semibold text-emerald-800">
                Message Sent!
              </h3>
              <p className="mt-1 text-xs text-emerald-600">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full Name */}
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="banner-name"
                  className="block text-lg font-medium text-[#111]"
                >
                  Full Name<span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="banner-name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Type your answer here"
                  className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-md text-zinc-700 focus:outline-none focus:ring-0 transition "
                />
              </div>

              {/* Email Address */}
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="banner-email"
                  className="block text-lg font-medium text-[#111]"
                >
                  Email Address<span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="banner-email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Type your answer here"
                  className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-md text-zinc-700 focus:outline-none focus:ring-0 transition "
                />
              </div>

              {/* Mobile Number */}
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="banner-mobile"
                  className="block text-lg font-medium text-[#111]"
                >
                  Mobile Number<span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  id="banner-mobile"
                  required
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  placeholder="Type your answer here"
                  className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-md text-zinc-700 focus:outline-none focus:ring-0 transition "
                />
              </div>

              {/* Select Topic */}
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="banner-topic"
                  className="block text-lg font-medium text-[#111]"
                >
                  Select Topic<span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <select
                    id="banner-topic"
                    required
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                    className="w-full appearance-none border border-zinc-200 rounded-md px-4 py-2.5 text-sm text-zinc-700 bg-white focus:outline-none focus:ring-0 transition"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="banner-message"
                  className="block text-lg font-medium text-[#111]"
                >
                  Message
                </label>
                <textarea
                  id="banner-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Type your answer here"
                  className="w-full border border-zinc-200 rounded-md px-4 py-2.5 text-md text-zinc-700 focus:outline-none focus:ring-0 transition  resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-accent text-white font-semibold py-3 rounded-md text-sm hover:bg-accent/90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right Panel – Image */}
      <div className="relative w-full sm:max-w-none md:max-w-none h-132 aspect-49/69 mx-auto lg:w-1/2 lg:max-w-none lg:h-auto lg:aspect-auto self-stretch">
        <Image
          src={contactBannerImg}
          alt="Deccan Taekwondo Academy Martial Artist"
          fill
          priority
          placeholder="blur"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
}
