
  import { ArrowRight } from "lucide-react";
  import CustomButton from "../components/UI/CustomButton";
  import bgimage from "/public/images/hg.jpg";
  import ImageCarousel from "../components/ImageCarousel";

  

  const About = () => {
    return (
      <div className="pt-0">
        {/* Hero Section */}
          <section className="relative h-[100vh] bg-cover bg-center"   style={{ backgroundImage: `url(${bgimage})` }}
          >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Dhairya Ayurveda</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Our journey in bringing authentic Ayurvedic wellness to modern lifestyles
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Founded with a passion for authentic Ayurveda, Dhairya Ayurveda was born from a vision to bridge ancient wellness wisdom with modern lifestyles. Our founder's personal journey with Ayurvedic healing inspired the creation of a brand that honors time-tested traditions while embracing scientific advancements.
                </p>
                <p>
                  We began our journey with extensive research into traditional Ayurvedic texts and practices, consulting with experts who have dedicated their lives to this ancient science. After years of formulation and testing, we developed our flagship products: Tond & Fit and our specialized Hair Loss solution.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to purity and efficacy. Every ingredient is meticulously sourced, every formula carefully balanced, and every product crafted with reverence for Ayurvedic principles.
                </p>
                <p>
                  Today, Dhairya Ayurveda stands as a testament to the power of natural healing, offering solutions that address common wellness concerns without compromising on quality or authenticity. Our growing family of satisfied customers is our greatest pride and motivation to continue our mission of spreading holistic wellness across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-ayurveda-light">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark mb-16 text-center">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-3xl text-ayurveda">1</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                  Sourcing
                </h3>
                <p className="text-gray-700">
                  We handpick the finest herbs and ingredients from trusted sources, ensuring purity and potency in every element that goes into our formulations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-3xl text-ayurveda">2</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                  Formulation
                </h3>
                <p className="text-gray-700">
                  Our expert Ayurvedic practitioners develop balanced formulations according to traditional principles, enhanced by modern scientific understanding.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-3xl text-ayurveda">3</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                  Production
                </h3>
                <p className="text-gray-700">
                  Each product is manufactured in certified facilities with strict quality control measures, preserving the integrity of the ingredients and formulations.
                </p>
              </div>
            </div>
          </div>
        </section>

          {/* Our Values Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark mb-16 text-center">
                Our Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex">
                  <div className="mr-6 text-ayurveda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                      Authenticity
                    </h3>
                    <p className="text-gray-700">
                      We stay true to Ayurvedic principles, honoring traditional knowledge while incorporating modern scientific understanding.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 text-ayurveda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                      Purity
                    </h3>
                    <p className="text-gray-700">
                      We never compromise on the quality of our ingredients or the integrity of our formulations, ensuring our products are as pure as nature intended.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 text-ayurveda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                      Effectiveness
                    </h3>
                    <p className="text-gray-700">
                      We believe in creating products that deliver real results, helping our customers achieve their wellness goals naturally.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 text-ayurveda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                      Sustainability
                    </h3>
                    <p className="text-gray-700">
                      We respect our planet by sourcing responsibly and minimizing our environmental footprint throughout our operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>




                  {/* Transformation Gallery Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark mb-12 text-center">
                Transformations with Dhairya Ayurveda
              </h2>
                     <ImageCarousel />

            </div>  
          </section>



  
      </div>
    );
  };

  export default About;
