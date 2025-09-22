import { MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

const Contact = () => {
    const contactInfo = [
        {
            title: "Call Us",
            primary: "+974 1234 5678",
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
            primary: "Qatar • Dubai • Dammam",
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
                            <div className="text-center space-y-4 group">
                                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all shadow-lg">
                                    <FaInstagram className="h-10 w-10" />
                                </div>
                                <p className="text-amber-400 font-semibold">
                                    {contactInfo[1].primary}
                                </p>
                            </div>
                            <span className="text-gray-400 mb-[1.1em]">|</span>
                            {/* facebook */}
                            <div className="text-center space-y-4 group">
                                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all shadow-lg">
                                    <LuFacebook className="h-10 w-10" />
                                </div>
                                <p className="text-amber-400 font-semibold">
                                    {contactInfo[2].primary}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400">Just leave message</p>
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

                <div className="mt-16 text-center">
                    <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg">
                        Schedule Your Service Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
