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
      className="mySwiper w-full h-screen pt-[50px] flex items-center justify-center"
    >
      <SwiperSlide>
        <img src="./image2.jpeg" alt="hero image" className="w-full h-screen" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-6xl font-bold max-w-[560px]">
            Desa Kademangan Kabupaten Cianjur
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
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
