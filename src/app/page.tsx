"use client";

import About from "@/component/about";
import Features from "@/component/features";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import Navbar from "@/component/navbar";
import Services from "@/component/services";
import { Contact } from "lucide-react";



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
