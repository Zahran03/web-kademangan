import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UMKMSlider = () => {
  const [umkmData, setUmkmData] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/UMKM");
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
      loop={false}
      centeredSlides={true}
      className="overflow-hidden flex items-center justify-center w-full umkm-swiper"
    >
      {umkmData.map((umkm) => (
        <SwiperSlide className="max-w-[300px] swiper-slider text-center h-full flex items-center justify-center m-0 transition-transform aspect-square bg-white text-red-500">
          <Link to={`/umkm/${umkm.id}`}>
            <img
              src={`http://localhost:3000/uploads/${umkm.gambar}`}
              className="flex items-center justify-center w-full h-full object-cover object-center"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default UMKMSlider;
