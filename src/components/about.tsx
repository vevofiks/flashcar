import { Award } from "lucide-react";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

const About = () => {
    return (
        <div id="about" className="bg-white">
            {/* Hero Section */}
            <ViewTransition name="about">
                <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center bg-amber-500/20 px-6 py-3 rounded-full border border-amber-400/30">
                            <Award className="h-5 w-5 text-amber-400 mr-2" />
                            <span className="text-amber-100">
                                30+ Years of Automotive Excellence
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold">
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                {" "}
                                Flash Car
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Under the umbrella of Riyadh Sky, Flash Car is
                            redefining automotive service excellence across
                            Qatar, Dubai, and Dammam with three decades of
                            proven expertise.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-[3em]">
                    <Link href="/about">
                        <span className="inline-flex items-center hover:scale-[1.1] hover:text-amber-500 ease-in-out duration-300 bg-amber-500/20 px-6 py-3 rounded-full border border-amber-400/30">
                            Know more about us?
                        </span>
                    </Link>
                </div>
            </section>
            </ViewTransition>
        </div>
    );
};

export default About;
