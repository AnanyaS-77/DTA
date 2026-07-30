"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Override default browser scroll restoration on load
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    // Scroll window to top-left instantly on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Bypass smooth scroll to ensure immediate reset
    });
  }, [pathname]);

  return null;
}
