"use client";

import About from "@/components/about";
import Carousel from "@/components/carousel";
import Features from "@/components/features";
import Hero from "@/components/hero";
import InstagramSwiper from "@/components/instagramSwiper";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import { useState } from "react";

export default function Home() {
    const [isIntersecting, setIsIntersecting] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Navbar isIntersecting={isIntersecting} />
            <Hero
                isIntersecting={isIntersecting}
                setIsIntersecting={setIsIntersecting}
            />
            <Services />
            <Features />
            <InstagramSwiper />
            <About />
            <Carousel />
        </div>
    );
}
