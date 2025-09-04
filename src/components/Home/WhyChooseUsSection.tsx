
import { Check } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      title: "100% Natural Formula",
      description: "No chemicals, no shortcuts",
    },
    {
      id: 2,
      title: "Clinically Inspired",
      description: "Deep Ayurvedic research",
    },
    {
      id: 3,
      title: "Hygienic Manufacturing",
      description: "Certified clean facilities",
    },
    {
      id: 4,
      title: "Real Results",
      description: "Natural weight loss support",
    },
  ];

  const benefits = [
    "Helps reduce belly fat naturally",
    "No synthetic fillers or preservatives",
    "Developed by wellness experts",
    "Made in India with love & care",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ayurveda-dark mb-4">
          Why Choose Us
        </h2>
        <p className="text-center text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
          Because Your Health Deserves the Best
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-ayurveda/10 text-ayurveda rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ayurveda-light p-8 md:p-12 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ayurveda-dark mb-4">
              Empowering Wellness With Nature's Science
            </h3>
            <p className="text-gray-700 mb-8">
              At Dhairya Ayurveda, we believe in healing from within. Tond & Fit is a premium Ayurvedic 
              supplement crafted to support fat metabolism, digestion, and energy.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-ayurveda mr-2">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
