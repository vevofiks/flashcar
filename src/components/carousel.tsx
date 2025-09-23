import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carousel = () => {
    return (
        <div className="flex flex-col gap-[4em] py-16 overflow-hidden bg-gray-900 text-white items-center">
            <h1 className="text-3xl md:text-4xl text-center">
                Our brand partners
            </h1>

            <div className="relative overflow-hidden w-1/3">
                <div className="absolute z-50 top-0 left-0 h-full w-20 bg-gradient-to-r from-[#0B1628] to-transparent pointer-events-none" />
                <div className="absolute z-50 top-0 right-0 h-full w-20 bg-gradient-to-l from-[#0B1628] to-transparent pointer-events-none" />

                <div className="animate-scroll-smooth w-screen md:w-[33em]">
                    {/* Single container with both sets */}
                    {new Array(5).fill(0).map((item, i) => (
                        <div key={i} className="flex gap-16 items-center">
                            <Link
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
                                <p className="text-center text-blue-400">
                                    Harfa Trading
                                </p>
                                <p className="text-center text-gray-400 text-sm">
                                    Doha, Qatar
                                </p>
                            </Link>
                            <Link
                                className="flex flex-col items-center justify-center w-[7em]"
                                href="https://goprogen.com/"
                            >
                                <Image
                                    src="/assets/partners/riyadh.png"
                                    height={100}
                                    width={100}
                                    className="w-1/2"
                                    alt="riyadh"
                                />
                                <p className="text-center text-blue-400">
                                    Riyadh Sky
                                </p>
                                <p className="text-center text-gray-400 text-sm">
                                    Deira, dubai
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
