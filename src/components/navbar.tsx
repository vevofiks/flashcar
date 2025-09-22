"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isIntersecting }: { isIntersecting?: boolean }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const butRef = useRef<HTMLButtonElement>(null);
    const page = usePathname();

    const links = [
        { name: "Home", href: "/#home" },
        { name: "Products", href: "/products" },
        { name: "Services", href: "/#services" },
        { name: "About", href: "/#about" },
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

    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
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
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {links.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`font-medium transition-colors ${
                                        page.endsWith(item.name.toLowerCase())
                                            ? "text-amber-500"
                                            : isIntersecting
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
                                    isIntersecting
                                        ? "text-gray-700"
                                        : "text-white"
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
                </div>
            </nav>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{
                            y: -300,
                            scale: 0,
                            opacity: 0,
                            backdropFilter: "blur(0)",
                        }}
                        animate={{
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            backdropFilter: "blur(12px)",
                        }}
                        exit={{
                            y: -300,
                            scale: 0,
                            opacity: 0,
                            backdropFilter: "blur(0)",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 25,
                        }}
                        id="mobile-menu"
                        className="md:hidden fixed w-[80vw] rounded-3xl h-fit top-[3em] z-[60] m-10"
                    >
                        <div
                            className={`px-2 pt-2 pb-3 space-y-1 rounded-3xl sm:px-3 transition-all ${
                                page.endsWith("products")
                                    ? "bg-black/50"
                                    : isIntersecting
                                    ? "bg-black/50"
                                    : "bg-white/20"
                            }`}
                        >
                            {links.map((item) => (
                                <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-3 py-2 text-center duration-150 hover:text-amber-500 ${
                                        page.endsWith(item.name.toLowerCase())
                                            ? "text-black"
                                            : "text-white"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
