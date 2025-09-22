"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { LuFacebook } from "react-icons/lu";

const Contact = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        naam: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((p) => ({ ...p, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.naam || !formData.message) {
            return;
        }

        const encodedMessage = `Hi, I'm ${formData.naam},%0A${formData.message}`;

        router.replace(`https://wa.me/966546457500?text=${encodedMessage}`);
        setFormData({
            naam: "",
            message: "",
        });
    };

    const contactInfo = [
        {
            title: "Call Us",
            primary: "+966 54 645 7500",
            secondary: "Available 24/7 for emergencies",
        },
        {
            primary: "flash_car_dammam",
        },
        {
            primary: "Flash-Car-Dammam",
        },
        {
            title: "Visit Our Locations",
            primary: "Saudi Arabia • Qatar",
            secondary: "Multiple service centers",
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ready to experience premium automotive care? Contact
                        Flash Car today!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* phone */}
                    <div className="text-center space-y-4 group">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all shadow-lg">
                            <Phone className="h-10 w-10" />
                        </div>
                        <h3 className="text-xl font-bold">
                            {contactInfo[0].title}
                        </h3>
                        <p className="text-amber-400 font-semibold">
                            {contactInfo[0].primary}
                        </p>
                        <p className="text-sm text-gray-400">
                            {contactInfo[0].secondary}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-end gap-2">
                            {/* instagram */}
                            <Link
                                target="_blank"
                                href="https://www.instagram.com/flash_car_dammam?igsh=MjQ4NDNrbjhvM3dl"
                            >
                                <div className="text-center space-y-4 group">
                                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all shadow-lg">
                                        <FaInstagram className="h-10 w-10" />
                                    </div>
                                    <p className="text-amber-400 font-semibold">
                                        {contactInfo[1].primary}
                                    </p>
                                </div>
                            </Link>
                            <span className="text-gray-400 mb-[1.1em]">|</span>
                            {/* facebook */}
                            <Link
                                target="_blank"
                                href="https://www.facebook.com/share/1Eno116GEx/"
                            >
                                <div className="text-center space-y-4 group">
                                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all shadow-lg">
                                        <LuFacebook className="h-10 w-10" />
                                    </div>
                                    <p className="text-amber-400 font-semibold">
                                        {contactInfo[2].primary}
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400">
                            Just leave message
                        </p>
                    </div>
                    {/* locations */}
                    <div className="text-center space-y-4 group">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all shadow-lg">
                            <MapPin className="h-10 w-10" />
                        </div>
                        <h3 className="text-xl font-bold">
                            {contactInfo[3].title}
                        </h3>
                        <p className="text-amber-400 font-semibold">
                            {contactInfo[3].primary}
                        </p>
                        <p className="text-sm text-gray-400">
                            {contactInfo[3].secondary}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-16">
                    <h3 className="text-3xl">Contact us</h3>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-1 my-[2em] px-[2em] md:px-0 w-screen sm:w-[60vw] md:w-[30vw] outline-none"
                    >
                        <label htmlFor="naam">Name</label>
                        <input
                            id="naam"
                            type="text"
                            value={formData.naam}
                            onChange={handleChange}
                            className="bg-[#3b3b3b] text-white rounded-lg outline-none p-1 h-[2em]"
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-[#3b3b3b] text-white rounded-lg outline-none p-1 min-h-[6em]"
                        ></textarea>
                        <button
                            type="submit"
                            className="flex gap-2 justify-center items-end bg-amber-300 text-black font-semibold rounded-2xl pt-2 pb-2.5 my-4 cursor-pointer"
                        >
                            <LiaTelegramPlane size={21} />
                            send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
