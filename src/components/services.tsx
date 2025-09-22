import { Package, Settings, Sparkles, Wrench } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: Sparkles,
            title: "Car Detailing & Polish",
            description:
                "Professional detailing services to restore your car's showroom shine",
            features: [
                "Exterior Polish",
                "Interior Deep Clean",
                "Paint Protection",
                "Ceramic Coating",
            ],
        },
        {
            icon: Settings,
            title: "Accessories Installation",
            description:
                "Premium automotive accessories to enhance your driving experience",
            features: [
                "Audio Systems",
                "Navigation",
                "Security Systems",
                "Custom Lighting",
            ],
        },
        {
            icon: Wrench,
            title: "Upholstery Services",
            description:
                "Expert upholstery repair and customization for ultimate comfort",
            features: [
                "Seat Repair",
                "Custom Covers",
                "Leather Treatment",
                "Interior Styling",
            ],
        },
        {
            icon: Package,
            title: "Spare Parts",
            description:
                "Genuine and high-quality spare parts for all vehicle makes",
            features: [
                "OEM Parts",
                "Quality Guarantee",
                "Fast Delivery",
                "Expert Installation",
            ],
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Our Premium Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive automotive solutions delivered with 30+
                        years of expertise
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
                        >
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-2">
                                    {service.features.map(
                                        (feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center space-x-2"
                                            >
                                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                <span className="text-sm text-gray-600">
                                                    {feature}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
