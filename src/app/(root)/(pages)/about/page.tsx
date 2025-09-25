import {
    Award,
    Car,
    CheckCircle,
    Globe,
    Target,
    Users,
} from "lucide-react";
import { unstable_ViewTransition as ViewTransition } from "react";
import { FaRegFlag } from "react-icons/fa";

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
                                Flash Car, under the umbrella of Riyadh Sky, is
                                a Qatar-based company dedicated to redefining
                                the automotive service and product experience.
                            </p>
                        </div>
                    </div>
                </section>
            </ViewTransition>

            {/* Main Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Our Story
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                            </div>

                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    <strong>Flash Car</strong>, under{" "}
                                    <strong className="text-amber-600">
                                        Riyadh Sky
                                    </strong>
                                    , is a Qatar-based company dedicated to
                                    redefining the automotive service and
                                    product experience.
                                </p>

                                <p>
                                    With our{" "}
                                    <strong>
                                        head office in Dubai for over 30 years
                                    </strong>{" "}
                                    and a strong operational base in
                                    <strong> Dammam</strong>, we have built a
                                    solid reputation for trust, innovation, and
                                    quality in the automotive industry.
                                </p>

                                <p>
                                    Guided by{" "}
                                    <strong className="text-amber-600">
                                        Harfa and Flashcar Team
                                    </strong>
                                    , Flash Car continues to drive excellence in
                                    every service we provide.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
                                <div className="space-y-8">
                                    <div className="text-center">
                                        <Car className="h-16 w-16 mx-auto mb-4" />
                                        <h3 className="text-3xl font-bold">
                                            Decades of Trust
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 text-center">
                                        <div className="space-y-2">
                                            <div className="text-4xl font-bold">
                                                30+
                                            </div>
                                            <div className="text-amber-100">
                                                Years Experience
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-4xl font-bold">
                                                100
                                            </div>
                                            <div className="text-amber-100">
                                                Target Branches
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-4xl font-bold">
                                                3
                                            </div>
                                            <div className="text-amber-100">
                                                Countries
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-4xl font-bold">
                                                ∞
                                            </div>
                                            <div className="text-amber-100">
                                                Possibilities
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Mission & Vision
                        </h2>
                        <p className="text-xl text-gray-600">
                            Driving excellence through purpose and ambition
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <Target className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">
                                        Our Mission
                                    </h3>
                                </div>

                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Flash Car is driven by a mission to:
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-gray-900">
                                                Deliver quality service
                                            </strong>
                                            <p className="text-gray-600">
                                                that exceeds customer
                                                expectations
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-gray-900">
                                                Provide the best products
                                            </strong>
                                            <p className="text-gray-600">
                                                with proven value
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-gray-900">
                                                Ensure every experience
                                            </strong>
                                            <p className="text-gray-600">
                                                is supported by skilled and
                                                certified technicians
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Globe className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold">
                                        Our Vision
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-xl text-amber-100 leading-relaxed">
                                        To establish{" "}
                                        <span className="font-bold text-white">
                                            100 branches worldwide
                                        </span>
                                        , making Flash Car a global leader in
                                        automotive care.
                                    </p>

                                    <div className="text-center pt-4">
                                        <div className="text-6xl font-bold opacity-20">
                                            100
                                        </div>
                                        <div className="text-amber-100 text-sm -mt-4">
                                            GLOBAL BRANCHES TARGET
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Leadership Excellence
                        </h2>
                        <p className="text-xl text-gray-600">
                            Guided by visionary leaders with decades of
                            expertise
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="text-center space-y-6">
                            <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                                <Users className="h-16 w-16 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Mr. Matar H. Almarri
                                </h3>
                                <p className="text-amber-600 font-semibold mb-4">
                                    Leadership
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Guiding Flash Car with strategic vision and
                                    unwavering commitment to automotive
                                    excellence, driving the company&apos;s
                                    growth across multiple markets.
                                </p>
                            </div>
                        </div>

                        <div className="text-center space-y-6">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                                <Award className="h-16 w-16 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Mr. Abduraheem Puthalavan
                                </h3>
                                <p className="text-blue-600 font-semibold mb-4">
                                    Management
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Managing day-to-day operations with
                                    precision and ensuring every customer
                                    receives the exceptional service Flash Car
                                    is known for.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Our Presence
                        </h2>
                        <p className="text-xl text-gray-300">
                            Strategic locations serving the Middle East & beyond
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Saudi Arabia */}
                        <div className="text-center space-y-4 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all">
                                <FaRegFlag className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold">Saudi Arabia</h3>
                            <p className="text-amber-400 font-semibold">
                                Main Location
                            </p>
                            <p className="text-gray-400 text-sm">
                                Central hub for our Middle East operations
                            </p>
                        </div>

                        {/* Qatar */}
                        <div className="text-center space-y-4 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all">
                                <FaRegFlag className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold">Qatar</h3>
                            <p className="text-amber-400 font-semibold">
                                Main Location
                            </p>
                            <p className="text-gray-400 text-sm">
                                Strong presence with advanced service facilities
                            </p>
                        </div>

                        {/* Dubai */}
                        <div className="text-center space-y-4 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all">
                                <FaRegFlag className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold">Dubai</h3>
                            <p className="text-amber-400 font-semibold">
                                Sister Company
                            </p>
                            <p className="text-gray-400 text-sm">
                                Established hub with decades of experience
                            </p>
                        </div>

                        {/* India */}
                        <div className="text-center space-y-4 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all">
                                <FaRegFlag className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold">India</h3>
                            <p className="text-amber-400 font-semibold">
                                Sister Company
                            </p>
                            <p className="text-gray-400 text-sm">
                                Support and innovation center
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Our Commitment
                        </h2>

                        <div className="bg-white rounded-2xl shadow-xl p-12 border border-amber-100">
                            <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-8">
                                &quot;For more than three decades, we have
                                remained committed to
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                    {" "}
                                    excellence, innovation, and customer
                                    satisfaction
                                </span>
                                —and our journey has only just begun.&quot;
                            </blockquote>

                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                                    <Car className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-900">
                                        Flash Car
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
