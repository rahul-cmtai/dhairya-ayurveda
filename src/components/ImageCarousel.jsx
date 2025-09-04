// components/ImageCarousel.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // removed Navigation
import "swiper/css";
import "swiper/css/pagination";

const images = ["/new/1.jpeg", "/new/2.jpeg", "/new/3.jpeg", "/new/4.jpeg", "/new/5.jpeg", "/new/6.jpeg", "/new/7.jpeg", "/new/8.jpeg", "/new/9.jpeg", "/new/10.jpeg", "/new/11.jpeg"];

const ImageCarousel = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Pagination, Autoplay]} // removed Navigation module
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        loop={true}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Transformation ${index + 1}`}
              className="w-full h-50 object-cover rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mt-6"></div>
    </div>
  );
};

export default ImageCarousel;
