import { Clock, Shield, Star, Zap, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";


const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentStat, setCurrentStat] = useState(0);
    const [currentService, setCurrentService] = useState(0);

    const services = [
        { text: "Premium Detailing", color: "text-blue-400" },
        { text: "Expert Repairs", color: "text-green-400" },
        { text: "Paint Protection", color: "text-purple-400" },
        { text: "Quality Assured", color: "text-amber-400" }
    ];

    const cars = [
        {
            name: "BMW",
            svg: (
                <svg viewBox="0 0 400 200" width="400" height="200">
                    {/* Car body */}
                    <rect x="50" y="80" width="300" height="80" rx="20" fill="#1f2937" />
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
                    <rect x="40" y="70" width="320" height="100" rx="25" fill="#111827" />
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
        }, 5000)
        return () => clearInterval(interval);
    }, [cars.length]);

    useEffect(() => {
        setIsVisible(true);

        // Animated counter for years of experience
        const statInterval = setInterval(() => {
            setCurrentStat(prev => {
                if (prev < 30) return prev + 1;
                clearInterval(statInterval);
                return 30;
            });
        }, 50);

        // Cycling through services
        const serviceInterval = setInterval(() => {
            setCurrentService(prev => (prev + 1) % services.length);
        }, 2500);

        return () => {
            clearInterval(statInterval);
            clearInterval(serviceInterval);
        };
    }, [services.length]);

    return (
        <section id="home" className="pt-16 bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white relative overflow-hidden min-h-screen">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-red-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, rgba(251,191,36,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    animation: 'drift 20s linear infinite'
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

                    {/* Left Content */}
                    <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="space-y-8">
                            {/* Enhanced Animated Badge */}
                            <div className={`inline-flex items-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-8 py-4 rounded-full border border-amber-400/30 backdrop-blur-sm transition-all duration-700 delay-300 hover:from-amber-500/30 hover:to-orange-500/30 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                <Star className="h-6 w-6 text-amber-400 mr-3 animate-pulse" />
                                <span className="text-lg font-semibold text-amber-100">{currentStat}+ Years of Excellence</span>
                            </div>

                            {/* Enhanced Main Heading */}
                            <div className="space-y-2">
                                <h1 className={`text-7xl md:text-8xl font-black leading-none transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                    <span className="block">Premium</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 animate-gradient">
                                        Automotive
                                    </span>
                                    <span className="block">Care</span>
                                </h1>
                            </div>

                            <p className={`text-xl text-gray-300 leading-relaxed max-w-2xl transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                                Flash Car delivers exceptional automotive services across Qatar, Dubai, and Dammam.
                                From premium detailing to professional accessories installation, we&apos;re your trusted partner for luxury car care.
                            </p>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                            <button className="group bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center space-x-3 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <span className="relative z-10">Schedule Service</span>
                                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                            </button>
                            <button className="group border-3 border-amber-400 text-amber-400 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden">
                                <div className="absolute inset-0 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                <span className="relative z-10">View Services</span>
                                <Zap className="h-6 w-6 group-hover:rotate-12 transition-transform duration-200 relative z-10" />
                            </button>
                        </div>

                        {/* Enhanced Feature Icons */}
                        <div className={`flex items-center space-x-16 pt-8 transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="p-3 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-xl group-hover:from-amber-400/30 group-hover:to-orange-400/30 transition-all duration-300 group-hover:scale-110">
                                    <Shield className="h-7 w-7 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span className="text-base font-semibold group-hover:text-amber-400 transition-colors duration-300">Certified Technicians</span>
                            </div>
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="p-3 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-xl group-hover:from-amber-400/30 group-hover:to-orange-400/30 transition-all duration-300 group-hover:scale-110">
                                    <Clock className="h-7 w-7 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span className="text-base font-semibold group-hover:text-amber-400 transition-colors duration-300">Express Service</span>
                            </div>
                        </div>

                        {/* Cycling Service Display */}
                        <div className={`mt-8 transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <div className="h-16 flex items-center">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`absolute transition-all duration-500 ${currentService === index
                                            ? 'opacity-100 scale-100 translate-y-0'
                                            : 'opacity-0 scale-75 translate-y-8'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <CheckCircle className={`h-6 w-6 ${service.color}`} />
                                            <span className="text-2xl font-bold text-white">{service.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Service Indicators */}
                            <div className="flex space-x-3 mt-4">
                                {services.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${currentService === index
                                            ? 'bg-amber-400 scale-125 shadow-lg shadow-amber-400/50'
                                            : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Realistic Car */}
                    <div className={`relative transition-all duration-1500 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>

                        {/* Main Car Container */}
                        <div className="relative">

                            {/* Realistic Car SVG */}
                            <div className="relative transform hover:scale-105 transition-all duration-500">

                                {/* Car Shadow */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-96 h-8 bg-black/30 rounded-full blur-xl animate-pulse"></div>

                                {/* Main Car */}
                                <svg width="400" height="200" viewBox="0 0 400 200" className="relative z-10 drop-shadow-2xl">
                                    <defs>
                                        {/* Car Body Gradient */}
                                        <linearGradient id="carBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#1f2937" />
                                            <stop offset="30%" stopColor="#374151" />
                                            <stop offset="70%" stopColor="#4b5563" />
                                            <stop offset="100%" stopColor="#1f2937" />
                                        </linearGradient>

                                        {/* Window Gradient */}
                                        <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                                            <stop offset="50%" stopColor="#1e40af" stopOpacity="0.6" />
                                            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
                                        </linearGradient>

                                        {/* Shine Effect */}
                                        <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                                            <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                        </linearGradient>

                                        {/* Wheel Gradient */}
                                        <radialGradient id="wheelGradient">
                                            <stop offset="0%" stopColor="#9ca3af" />
                                            <stop offset="70%" stopColor="#6b7280" />
                                            <stop offset="100%" stopColor="#374151" />
                                        </radialGradient>
                                    </defs>

                                    {/* Car Body */}
                                    <path d="M50 120 L80 60 L320 60 L350 120 L350 150 L50 150 Z"
                                        fill="url(#carBodyGradient)"
                                        stroke="rgba(251,191,36,0.3)"
                                        strokeWidth="1" />

                                    {/* Car Roof */}
                                    <path d="M90 60 L310 60 L290 80 L110 80 Z"
                                        fill="url(#carBodyGradient)"
                                        opacity="0.9" />

                                    {/* Windows */}
                                    <path d="M100 60 L300 60 L280 75 L120 75 Z"
                                        fill="url(#windowGradient)"
                                        className="animate-pulse delay-300" />

                                    {/* Window Frames */}
                                    <path d="M100 60 L300 60 L280 75 L120 75 Z"
                                        fill="none"
                                        stroke="#374151"
                                        strokeWidth="2" />

                                    {/* Front Bumper */}
                                    <rect x="45" y="110" width="15" height="20" rx="7" fill="#1f2937" />

                                    {/* Rear Bumper */}
                                    <rect x="340" y="110" width="15" height="20" rx="7" fill="#1f2937" />

                                    {/* Headlights */}
                                    <ellipse cx="65" cy="100" rx="8" ry="12" fill="#fbbf24" className="animate-pulse delay-500">
                                        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                                    </ellipse>

                                    {/* Taillights */}
                                    <ellipse cx="335" cy="100" rx="6" ry="10" fill="#ef4444" className="animate-pulse delay-700">
                                        <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
                                    </ellipse>

                                    {/* Front Wheel */}
                                    <circle cx="110" cy="150" r="25" fill="#374151" stroke="#6b7280" strokeWidth="3" />
                                    <circle cx="110" cy="150" r="20" fill="url(#wheelGradient)">
                                        <animateTransform attributeName="transform"
                                            attributeType="XML"
                                            type="rotate"
                                            from="0 110 150"
                                            to="360 110 150"
                                            dur="2s"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="110" cy="150" r="8" fill="#fbbf24" />

                                    {/* Rear Wheel */}
                                    <circle cx="290" cy="150" r="25" fill="#374151" stroke="#6b7280" strokeWidth="3" />
                                    <circle cx="290" cy="150" r="20" fill="url(#wheelGradient)">
                                        <animateTransform attributeName="transform"
                                            attributeType="XML"
                                            type="rotate"
                                            from="0 290 150"
                                            to="360 290 150"
                                            dur="2s"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="290" cy="150" r="8" fill="#fbbf24" />

                                    {/* Car Door Lines */}
                                    <line x1="140" y1="80" x2="140" y2="130" stroke="#4b5563" strokeWidth="1" />
                                    <line x1="260" y1="80" x2="260" y2="130" stroke="#4b5563" strokeWidth="1" />

                                    {/* Side Mirror */}
                                    <ellipse cx="95" cy="85" rx="4" ry="6" fill="#374151" />

                                    {/* Shine Effect */}
                                    <path d="M80 60 L320 60 L300 120 L100 120 Z"
                                        fill="url(#shineGradient)"
                                        opacity="0.3">
                                        <animateTransform attributeName="transform"
                                            attributeType="XML"
                                            type="translate"
                                            values="-400,0;400,0;-400,0"
                                            dur="4s"
                                            repeatCount="indefinite" />
                                    </path>
                                </svg>

                                {/* Floating Sparkle Effects */}
                                <div className="absolute top-8 left-16 w-3 h-3 bg-amber-400 rounded-full animate-ping delay-300"></div>
                                <div className="absolute top-20 right-20 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-700"></div>
                                <div className="absolute bottom-24 left-24 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-1100"></div>
                                <div className="absolute top-12 right-32 w-1.5 h-1.5 bg-amber-300 rounded-full animate-ping delay-1500"></div>

                                {/* Motion Lines */}
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2 opacity-60">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-0.5 bg-gradient-to-l from-transparent to-amber-400 animate-pulse"
                                            style={{
                                                width: `${20 + i * 8}px`,
                                                animationDelay: `${i * 200}ms`,
                                                animationDuration: '1.5s'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Enhanced Stats Cards */}
                            <div className="mt-12 grid grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10 text-center group">
                                    <div className="text-3xl font-black text-amber-400 group-hover:scale-110 transition-transform duration-200 mb-2">500+</div>
                                    <div className="text-sm text-gray-300 font-semibold">Happy Customers</div>
                                </div>
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 text-center group">
                                    <div className="text-3xl font-black text-green-400 group-hover:scale-110 transition-transform duration-200 mb-2">24/7</div>
                                    <div className="text-sm text-gray-300 font-semibold">Service Available</div>
                                </div>
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 text-center group">
                                    <div className="text-3xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-200 mb-2">100%</div>
                                    <div className="text-sm text-gray-300 font-semibold">Satisfaction</div>
                                </div>
                            </div>

                            {/* Call to Action Button */}
                            <div className="text-center mt-8">
                                <button className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-amber-500/25 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 mx-auto group">
                                    <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Get Free Quote</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes drift {
                    0% { transform: translateX(-50px) translateY(-50px); }
                    100% { transform: translateX(50px) translateY(50px); }
                }
                
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}

export default Hero;