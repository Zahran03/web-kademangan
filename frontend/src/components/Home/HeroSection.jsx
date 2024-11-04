import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
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
      className="mySwiper max-w-[2160px] w-full h-full pt-[50px] flex items-center justify-center"
    >
      <SwiperSlide>
        <img
          src="./image2.jpeg"
          alt="hero image"
          className="w-full h-full object-cover mx-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-6xl font-bold w-full">
            Desa Kademangan <br className="hidden md:flex" /> Kabupaten Cianjur
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./image2.jpeg"
          alt="hero image"
          className="w-full h-full object-cover mx-auto"
        />
      </SwiperSlide>
      {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  );
};

export default HeroSection;
