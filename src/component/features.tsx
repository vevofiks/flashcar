import { Clock, Shield, Star } from "lucide-react";

const Features = () => {
    const features = [
    {
      icon: Clock,
      title: "Expert Service",
      description: "30+ years of automotive excellence across Qatar, Dubai, and Dammam"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium products and services that exceed customer expectations"
    },
    {
      icon: Star,
      title: "Certified Team",
      description: "Skilled and certified technicians ensuring top-quality workmanship"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;