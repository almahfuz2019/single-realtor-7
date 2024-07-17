import About from "@/Components/Home/About";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/FeaturedListing";
import HeroSection from "@/Components/Home/HeroSection";
import Insights from "@/Components/Home/Insights";
import SearchArea from "@/Components/Home/SearchArea";
import Services from "@/Components/Home/Services";
import Testimonial from "@/Components/Home/Testimonial";
import React from "react";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <About />
      <Services />
      <Featured />
     <SearchArea/>
     <Testimonial/>
      <Insights />
      {/* <Contact /> */}
    </div>
  );
}
