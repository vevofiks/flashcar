"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import InstagramSwiper from "@/components/instagramSwiper";
import Services from "@/components/services";



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Features />
      <InstagramSwiper />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
