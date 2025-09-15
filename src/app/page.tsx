"use client";

import About from "@/component/about";
import Contact from "@/component/contact";
import Features from "@/component/features";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import InstagramSwiper from "@/component/instagramSwiper";
import Navbar from "@/component/navbar";
import Services from "@/component/services";



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
