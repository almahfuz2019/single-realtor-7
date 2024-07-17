"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Animation() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return null; // Render nothing since this component is for initialization only
}
