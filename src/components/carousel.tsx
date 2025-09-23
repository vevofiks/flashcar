import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carousel = () => {
    return (
        <div className="flex flex-col gap-4 py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white items-center">
            <h1 className="text-4xl md:text-5xl text-center">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Brand Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
                We are proud to collaborate with trusted partners who share our
                vision and values. These long-standing relationships are built
                on mutual trust, innovation, and commitment to excellence —
                helping us grow together and deliver greater value to our
                customers.
            </p>
            <div className="relative overflow-hidden w-[calc(100%-2rem)] sm:w-1/2 md:w-1/3 mt-[4em]">
                <div className="animate-scroll-smooth w-screen md:w-[33em]">
                    {/* Single container with both sets */}
                    {new Array(5).fill(0).map((_, i) => (
                        <div key={i} className="flex gap-16 items-center">
                            <Link
                                target="_blank"
                                className="flex flex-col items-center justify-center w-[7em]"
                                href="http://harfatrading.com/"
                            >
                                <Image
                                    src="/assets/partners/harfa.PNG"
                                    height={100}
                                    width={100}
                                    className="w-1/2"
                                    alt="harfa"
                                />
                                <p className="text-center text-white">
                                    Harfa Trading
                                </p>
                                <p className="text-center text-gray-400 text-sm">
                                    Doha, Qatar
                                </p>
                            </Link>
                            <div
                                // target="_blank"
                                className="flex flex-col items-center justify-center w-[7em]"
                                // href="https://goprogen.com/"
                            >
                                <Image
                                    src="/assets/partners/riyadh.png"
                                    height={100}
                                    width={100}
                                    className="w-1/2"
                                    alt="riyadh"
                                />
                                <p className="text-center text-white">
                                    Riyadh Sky
                                </p>
                                <p className="text-center text-gray-400 text-sm">
                                    Deira, dubai
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
