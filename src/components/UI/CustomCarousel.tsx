
import { useState, useEffect, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  interval?: number;
  indicators?: boolean;
  arrows?: boolean;
}

const CustomCarousel = ({
  children,
  autoSlide = true,
  interval = 5000,
  indicators = true,
  arrows = true,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = children.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, interval]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="min-w-full">
            {child}
          </div>
        ))}
      </div>

      {arrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-ayurveda-dark p-2 rounded-full shadow-md transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-ayurveda-dark p-2 rounded-full shadow-md transition-all duration-300"
          >
            <ArrowRight size={20} />
          </button>
        </>
      )}

      {indicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-ayurveda w-6" : "bg-white/60"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
