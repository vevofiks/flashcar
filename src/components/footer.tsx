import { Car } from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                                <Car className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="font-bold text-xl">
                                    Flash Car
                                </span>
                                <div className="text-xs text-gray-400">
                                    Riyadh Sky
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Premium automotive care with 30+ years of excellence
                            across Qatar, Dubai, and Dammam.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-amber-400">
                            Quick Links
                        </h4>
                        <div className="space-y-2">
                            <a
                                href="#home"
                                className="block text-gray-400 hover:text-amber-400 transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#services"
                                className="block text-gray-400 hover:text-amber-400 transition-colors"
                            >
                                Services
                            </a>
                            <a
                                href="#about"
                                className="block text-gray-400 hover:text-amber-400 transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                className="block text-gray-400 hover:text-amber-400 transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-amber-400">
                            Our Services
                        </h4>
                        <div className="space-y-2 text-sm">
                            <p className="text-gray-400">
                                Car Detailing & Polish
                            </p>
                            <p className="text-gray-400">
                                Accessories Installation
                            </p>
                            <p className="text-gray-400">Upholstery Services</p>
                            <p className="text-gray-400">Spare Parts</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-amber-400">
                            Locations
                        </h4>
                        <div className="space-y-2 text-sm">
                            <p className="text-gray-400">Qatar (Head Office)</p>
                            <p className="text-gray-400">Dubai (30+ Years)</p>
                            <p className="text-gray-400">Dammam (Operations)</p>
                        </div>
                    </div>
                </div>

                <div className="border-t flex justify-center gap-6 border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>
                        &copy; 2025 Flash Car - Riyadh Sky. All rights reserved.
                    </p>
                    <div className="flex gap-2">
                        <Link
                            href="https://www.instagram.com/flash_car_dammam?igsh=MjQ4NDNrbjhvM3dl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram
                                size={26}
                                className="bg-amber-400 text-black p-1 rounded-full"
                            />
                        </Link>
                        <Link href="" target="_blank" rel="noopener noreferrer">
                            <LuFacebook
                                size={26}
                                className="bg-amber-400 text-black p-1 rounded-full"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
