import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            primary: "+974 1234 5678",
            secondary: "Available 24/7 for emergencies",
        },
        {
            icon: Mail,
            title: "Email Us",
            primary: "info@flashcar.qa",
            secondary: "We'll respond within 2 hours",
        },
        {
            icon: MapPin,
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
                    {contactInfo.map((contact, index) => (
                        <div
                            key={index}
                            className="text-center space-y-4 group"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all shadow-lg">
                                <contact.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold">
                                {contact.title}
                            </h3>
                            <p className="text-amber-400 font-semibold">
                                {contact.primary}
                            </p>
                            <p className="text-sm text-gray-400">
                                {contact.secondary}
                            </p>
                        </div>
                    ))}
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
