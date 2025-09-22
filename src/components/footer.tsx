import { Car } from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-4">
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
                        <div className="text-sm flex text-gray-400">
                            <p>Qatar</p>
                            <span className="mx-4">|</span>
                            <p>Dubai</p>
                            <span className="mx-4">|</span>
                            <p>Dammam</p>
                        </div>
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
                            Connect with us
                        </h4>
                        <div className="flex gap-2">
                            <Link
                                href="https://www.instagram.com/flash_car_dammam?igsh=MjQ4NDNrbjhvM3dl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram
                                    size={34}
                                    className="bg-amber-400 text-black p-1.5 rounded-full"
                                />
                            </Link>
                            <Link
                                href="https://www.facebook.com/share/1Eno116GEx/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LuFacebook
                                    size={34}
                                    className="bg-amber-400 text-black p-1.5 rounded-full"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>
                        &copy; 2025 Flash Car - Riyadh Sky. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
