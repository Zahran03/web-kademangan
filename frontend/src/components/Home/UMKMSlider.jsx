import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const UMKMSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      loop={true}
      centeredSlides={true}
      className="overflow-hidden flex items-center justify-center w-full umkm-swiper"
    >
      <SwiperSlide className="max-w-[300px] swiper-slider text-center h-full flex items-center justify-center m-0 transition-transform aspect-square bg-white text-red-500">
        <div className="flex items-center justify-center w-full h-full">1</div>
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] swiper-slider text-center h-full flex items-center justify-center m-0 transition-transform aspect-square bg-white text-red-500">
        <div className="flex items-center justify-center w-full h-full">2</div>
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] swiper-slider text-center h-full flex items-center justify-center m-0 transition-transform aspect-square bg-white text-red-500">
        <div className="flex items-center justify-center w-full h-full">3</div>
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] swiper-slider text-center h-full flex items-center justify-center m-0 transition-transform aspect-square bg-white text-red-500">
        <div className="flex items-center justify-center w-full h-full">4</div>
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] swiper-slider text-center h-full flex items-center justify-center m-0 transition-transform aspect-square bg-white text-red-500">
        <div className="flex items-center justify-center w-full h-full">5</div>
      </SwiperSlide>
      <SwiperSlide className="max-w-[300px] swiper-slider text-center h-full flex items-center justify-center m-0 transition-transform aspect-square bg-white text-red-500">
        <div className="flex items-center justify-center w-full h-full">6</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default UMKMSlider;
