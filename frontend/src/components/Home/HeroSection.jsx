import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper w-full h-screen flex items-center justify-center"
    >
      <SwiperSlide>
        <img
          src="./image2.jpeg"
          alt="hero image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold w-full">
            Desa Kademangan <br className="hidden md:flex" /> Kabupaten Cianjur
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./image2.jpeg"
          alt="hero image"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
