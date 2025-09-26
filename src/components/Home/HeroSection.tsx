import CustomCarousel from "../UI/CustomCarousel";

const HeroSection = () => {
  const desktopSlides = [
    {
      id: 1,
      image: "/home-hero.jpeg",
    },
    {
      id: 2,
      image: "/home-hero.jpeg",
    },
  ];

  return (
    <section className="relative w-full h-[100vh] md:h-[90vh] sm:h-[75vh] xs:h-[60vh] overflow-hidden">
      {/* Desktop Carousel */}
      <div className="hidden sm:block">
        <CustomCarousel autoSlide={true} arrows={true} indicators={true}>
          {desktopSlides.map((slide) => (
            <div key={slide.id} className="relative w-full h-[100vh] md:h-[90vh] sm:h-[75vh]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center top',
                  backgroundSize: 'cover',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  {/* Add desktop content if needed */}
                </div>
              </div>
            </div>
          ))}
        </CustomCarousel>
      </div>

      {/* Mobile Static Image */}
      <div className="block sm:hidden relative w-full h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/images/about.jpg)`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Natural Ayurvedic Solutions
              </h1>
              <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                Discover our range of authentic Ayurvedic products for better health and wellness
              </p>
              <button 
                onClick={() => window.location.href = '/shop'}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
