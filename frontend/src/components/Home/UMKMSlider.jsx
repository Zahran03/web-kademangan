import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";

const UMKMSlider = () => {
  const [umkmData, setUmkmData] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch("http://localhost:3000/UMKM");
        const data = await res.json();
        setUmkmData(data);
      } catch (error) {
        throw new Error("error doing fetch");
      }
    };
    fecthData();
  }, []);

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      loop={true}
      centeredSlides={true}
      className="overflow-hidden flex items-center justify-center w-full umkm-swiper"
    >
      {umkmData.map((umkm) => (
        <SwiperSlide className="max-w-[300px] swiper-slider text-center h-full flex items-center justify-center m-0 transition-transform aspect-square bg-white text-red-500">
          <img
            src={`http://localhost:3000/uploads/${umkm.gambar}`}
            className="flex items-center justify-center w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
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
