import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinguaPrimeAcademy",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      {/* <Video /> */}
      <Courses />
      <Brands />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}

// TODO: Type of courses as a component
