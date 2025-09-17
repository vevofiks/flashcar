"use client";

import Features from "@/components/features";
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
        </div>
    );
}
