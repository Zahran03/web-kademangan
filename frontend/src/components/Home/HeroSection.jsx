import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const [heroSection, setHeroSection] = useState([]);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/heroSection");
        const data = await res.json();
        setHeroSection(data);
      } catch (error) {}
    };
    fetchHero();
  }, []);
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
      {heroSection.map((hero) => (
        <SwiperSlide>
          <img
            src={
              hero.gambar
                ? `http://localhost:3000/uploads/${hero.gambar} `
                : "./image2.jpeg"
            }
            alt="hero image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold w-full max-w-96">
              {hero.judul}
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
