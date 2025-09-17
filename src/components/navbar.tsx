"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = ({ isIntersecting }: { isIntersecting?: boolean }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const butRef = useRef<HTMLButtonElement>(null);
    const page = usePathname();

    const links = [
        { name: "Home", href: "/#home" },
        { name: "Products", href: "/products" },
        { name: "Services", href: "/#services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                butRef.current &&
                !butRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest("#mobile-menu")
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                page.endsWith("products")
                    ? "bg-gray-800"
                    : isIntersecting
                    ? "bg-white/20 backdrop-blur-md shadow-lg"
                    : "bg-transparent backdrop-blur-sm"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <Link href={"/"} className="flex items-center">
                        <Image
                            src="/assets/flashcar.png"
                            alt="Flash Car Logo"
                            width={80}
                            height={80}
                            priority
                        />
                        <div className="ml-3">
                            <span
                                className={`font-bold text-2xl transition-colors ${
                                    page.endsWith("products")
                                        ? "text-white"
                                        : isIntersecting
                                        ? "text-gray-900"
                                        : "text-white"
                                }`}
                            >
                                Flash Car
                            </span>
                            <div
                                className={`text-xs transition-colors ${
                                    page.endsWith("products")
                                        ? "text-white"
                                        : isIntersecting
                                        ? "text-gray-500"
                                        : "text-gray-200"
                                }`}
                            >
                                Riyadh Sky
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-medium transition-colors ${
                                    isIntersecting
                                        ? "text-gray-700 hover:text-amber-600"
                                        : "text-white hover:text-amber-400"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            ref={butRef}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`transition-colors ${
                                isIntersecting ? "text-gray-700" : "text-white"
                            } hover:text-amber-600`}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div id="mobile-menu" className="md:hidden">
                        <div
                            className={`px-2 pt-2 pb-3 space-y-1 rounded-xl sm:px-3 transition-all ${
                                page.endsWith("products")
                                    ? "bg-black/50 text-white backdrop-blur-md"
                                    : isIntersecting
                                    ? "bg-white/20 text-black backdrop-blur-md"
                                    : "bg-white/20 text-white backdrop-blur-md"
                            }`}
                        >
                            {links.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-3 py-2 transition-colors ${
                                        isIntersecting
                                            ? "text-gray-700 hover:text-amber-600"
                                            : "text-white hover:text-amber-400"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
