import { useState } from "react";
import CustomCarousel from "../UI/CustomCarousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "/images/www/1.jpeg",
      text: "I've tried many products before, but Tond & Fit truly made a difference. Within a month, I felt more energetic and lighter. Highly recommended!",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      image: "/images/www/2.jpeg",
      text: "The natural approach of Dhairya Ayurveda stood out to me. Their Tond & Fit supplement has been a game-changer for my digestive health and weight management journey.",
    },
    {
      id: 3,
      name: "Boris",
      image: "/images/www/3.jpeg",
      text: "As someone who values traditional medicine, I appreciate the purity of Dhairya's products. Their customer service is excellent, and the results speak for themselves.",
    },
    {
      id: 4,
      name: "Vikram Singh",
      image: "/images/www/4.jpeg",
      text: "After struggling with weight issues for years, I found Tond & Fit to be a supportive companion in my health journey. It's gentle yet effective.",
    },
    {
      id: 5,
      name: "Meera Patel",
      image: "/images/www/5.jpeg",
      text: "The quality of Dhairya's products is evident from day one. I've incorporated Tond & Fit into my daily routine and noticed significant improvements in my energy levels.",
    },
    {
      id: 6,
      name: "Suresh Reddy",
      image: "/images/www/6.jpeg",
      text: "What I love about Dhairya Ayurveda is their commitment to authenticity. Their Hair Loss product has helped me regain confidence and healthier hair.",
    },
    {
      id: 7,
      name: "Isabella Bethany",
      image: "/images/www/7.jpeg",
      text: "Tond & Fit gave me the boost I needed! I feel lighter, more confident, and truly healthier.",
    },
    {
      id: 8,
      name: "Manoj Verma",
      image: "/images/www/8.jpeg",
      text: "I was skeptical at first, but after using the product for 2 months, I'm genuinely impressed with the results.",
    },

  ];

  const testimonialSlides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    if (i + 1 < testimonials.length) {
      testimonialSlides.push([testimonials[i], testimonials[i + 1]]);
    } else {
      testimonialSlides.push([testimonials[i]]);
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ayurveda-dark mb-16">
          What Our Customers Say
        </h2>

        <div className="max-w-5xl mx-auto">
          <CustomCarousel arrows={true} indicators={true} autoSlide={true} interval={6000}>
            {testimonialSlides.map((slide, index) => (
              <div key={index} className="px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {slide.map((testimonial) => (
                    <div 
                      key={testimonial.id}
                      className="bg-ayurveda-light p-6 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h4 className="font-serif text-lg font-bold text-ayurveda-dark">
                            {testimonial.name}
                          </h4>
                          <div className="flex text-yellow-400">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
