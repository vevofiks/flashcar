import { Clock, Shield, Star, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";

interface IHero {
    isIntersecting: boolean;
    setIsIntersecting: Dispatch<SetStateAction<boolean>>;
}

const Hero = ({ isIntersecting, setIsIntersecting }: IHero) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentStat, setCurrentStat] = useState(0);
    const [currentService, setCurrentService] = useState(0);
    const homeRef = useRef<HTMLDivElement>(null);

    const services = [
        { text: "Premium Detailing", color: "text-blue-400" },
        { text: "Expert Repairs", color: "text-green-400" },
        { text: "Paint Protection", color: "text-purple-400" },
        { text: "Quality Assured", color: "text-amber-400" },
    ];

    const car_show = [
        { src: "/assets/bm.png" },
        { src: "/assets/porsche.png" },
        { src: "/assets/benz.png" },
        { src: "/assets/defender.png" },
    ];

    const cars = [
        {
            name: "BMW",
            svg: (
                <svg viewBox="0 0 400 200" width="400" height="200">
                    {/* Car body */}
                    <rect
                        x="50"
                        y="80"
                        width="300"
                        height="80"
                        rx="20"
                        fill="#1f2937"
                    />
                    {/* Headlights */}
                    <circle cx="60" cy="120" r="12" fill="#fbbf24">
                        <animate
                            attributeName="opacity"
                            values="1;0.2;1"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="340" cy="120" r="12" fill="#fbbf24">
                        <animate
                            attributeName="opacity"
                            values="1;0.2;1"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            ),
        },
        {
            name: "Land Cruiser",
            svg: (
                <svg viewBox="0 0 400 200" width="400" height="200">
                    {/* Car body */}
                    <rect
                        x="40"
                        y="70"
                        width="320"
                        height="100"
                        rx="25"
                        fill="#111827"
                    />
                    {/* Headlights */}
                    <circle cx="60" cy="120" r="14" fill="#fde047">
                        <animate
                            attributeName="opacity"
                            values="1;0.3;1"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="340" cy="120" r="14" fill="#fde047">
                        <animate
                            attributeName="opacity"
                            values="1;0.3;1"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            ),
        },
    ];

    const [, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % cars.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [cars.length]);

    useEffect(() => {
        setIsVisible(true);

        let count = 0;
        const statInterval = setInterval(() => {
            count++;
            setCurrentStat(count);
            if (count >= 30) clearInterval(statInterval);
        }, 50);

        const serviceInterval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length);
        }, 2500);

        return () => {
            clearInterval(statInterval);
            clearInterval(serviceInterval);
        };
    }, [services.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(() => !entry.isIntersecting);
            },
            { threshold: 0 }
        );

        const currentRef = homeRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isIntersecting]);

    return (
        <section
            id="home"
            ref={homeRef}
            className="pt-16 bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white relative overflow-hidden min-h-screen"
        >
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-red-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(251,191,36,0.1) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                        animation: "drift 20s linear infinite",
                    }}
                ></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
                    {/* Left Content */}
                    <div
                        className={`space-y-10 transition-all duration-1000 ${
                            isVisible
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-10 opacity-0"
                        }`}
                    >
                        <div className="space-y-8">
                            {/* Enhanced Animated Badge */}
                            <div
                                className={`inline-flex items-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-amber-400/30 backdrop-blur-sm transition-all duration-700 delay-300 hover:from-amber-500/30 hover:to-orange-500/30 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 ${
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-4 opacity-0"
                                }`}
                            >
                                <Star className="h-4 w-4 text-amber-400 mr-3 animate-pulse" />
                                <span className="font-semibold text-amber-100">
                                    {currentStat}+ Years of Excellence
                                </span>
                            </div>

                            {/* Enhanced Main Heading */}
                            <div className="space-y-2">
                                <h1
                                    className={`text-6xl md:text-7xl font-black leading-none transition-all duration-1000 delay-500 ${
                                        isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-8 opacity-0"
                                    }`}
                                >
                                    <span className="block">Premium</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 animate-gradient">
                                        Automotive
                                    </span>
                                    <span className="block">Care</span>
                                </h1>
                            </div>

                            <p
                                className={`text-lg text-gray-300 leading-relaxed max-w-2xl transition-all duration-1000 delay-900 ${
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-6 opacity-0"
                                }`}
                            >
                                Flash Car delivers exceptional automotive
                                services across Qatar, Dubai,Hong Kong and Saudi Arabia. From
                                premium detailing to professional accessories
                                installation, we&apos;re your trusted partner
                                for luxury car care.
                            </p>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div
                            className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-1100 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-6 opacity-0"
                            }`}
                        >
                            <Link href="#services">
                                <button className="group border-3 border-amber-400 text-amber-400 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    <span className="relative z-10">
                                        View Services
                                    </span>
                                    <Zap className="h-6 w-6 group-hover:rotate-12 transition-transform duration-200 relative z-10" />
                                </button>
                            </Link>
                        </div>

                        {/* Enhanced Feature Icons */}
                        <div
                            className={`flex items-center space-x-16 pt-8 transition-all duration-1000 delay-1300 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="p-3 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-xl group-hover:from-amber-400/30 group-hover:to-orange-400/30 transition-all duration-300 group-hover:scale-110">
                                    <Shield className="h-7 w-7 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span className="text-base font-semibold group-hover:text-amber-400 transition-colors duration-300">
                                    Certified Technicians
                                </span>
                            </div>
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="p-3 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-xl group-hover:from-amber-400/30 group-hover:to-orange-400/30 transition-all duration-300 group-hover:scale-110">
                                    <Clock className="h-7 w-7 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span className="text-base font-semibold group-hover:text-amber-400 transition-colors duration-300">
                                    Express Service
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Realistic Car */}
                    <div
                        className={`relative transition-all duration-1500 delay-600 ${
                            isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-20 opacity-0"
                        }`}
                    >
                        {/* Cycling Service Display */}
                        <div
                            className={`mt-8 transition-all duration-1000 delay-1500 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <div className="h-16 flex items-center">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`absolute transition-all duration-500 ${
                                            currentService === index
                                                ? "opacity-100 scale-100 translate-y-0"
                                                : "opacity-0 scale-75 translate-y-8"
                                        }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <CheckCircle
                                                className={`h-6 w-6 ${service.color}`}
                                            />
                                            <span className="text-2xl font-bold text-white">
                                                {service.text}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Service Indicators */}
                            <div className="flex space-x-3 mt-4">
                                {services.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                            currentService === index
                                                ? "bg-amber-400 scale-125 shadow-lg shadow-amber-400/50"
                                                : "bg-white/30 hover:bg-white/50"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Main Car Container */}
                        <div className="relative">
                            {/* Realistic Car SVG */}
                            <div className="relative transform hover:scale-105 transition-all duration-500">
                                {/* Car Shadow */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-96 h-8 bg-black/30 rounded-full blur-xl animate-pulse"></div>

                                {/* Main Car */}
                                <div
                                    className={`transition-all duration-1000 delay-1500 ${
                                        isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-4 opacity-0"
                                    }`}
                                >
                                    <div className="w-[18em] h-[18em] flex items-center">
                                        {car_show.map((car, index) => (
                                            <div
                                                key={index}
                                                className={`absolute w-full h-auto transition-all duration-500 ${
                                                    currentService === index
                                                        ? "opacity-100 scale-100 translate-y-0"
                                                        : "opacity-0 scale-75 translate-y-8"
                                                }`}
                                            >
                                                {/* content */}
                                                <Image
                                                    className={"w-full h-full"}
                                                    src={car.src}
                                                    width={100}
                                                    height={100}
                                                    alt="car"
                                                    unoptimized={true}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Stats Cards */}
                            <div className="mt-12 grid grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10 text-center group">
                                    <div className="text-3xl font-black text-amber-400 group-hover:scale-110 transition-transform duration-200 mb-2">
                                        500+
                                    </div>
                                    <div className="text-sm text-gray-300 font-semibold">
                                        Happy Customers
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 text-center group">
                                    <div className="text-3xl font-black text-green-400 group-hover:scale-110 transition-transform duration-200 mb-2">
                                        24/7
                                    </div>
                                    <div className="text-sm text-gray-300 font-semibold">
                                        Service Available
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 text-center group">
                                    <div className="text-3xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-200 mb-2">
                                        100%
                                    </div>
                                    <div className="text-sm text-gray-300 font-semibold">
                                        Satisfaction
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes drift {
                    0% {
                        transform: translateX(-50px) translateY(-50px);
                    }
                    100% {
                        transform: translateX(50px) translateY(50px);
                    }
                }

                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
