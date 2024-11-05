import UMKMSlider from "./UMKMSlider";

const UMKMSection = () => {
  return (
    <section className="bg-primary text-white container mx-auto flex flex-col mt-20 px-12 py-24 pt-36 mb-[301px]">
      {/* Top Section */}
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold capitalize md:text-4xl">
          UMKM Desa Kademangan
        </h2>
        <p className="text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <button className="w-36 px-4 py-2 bg-white text-primary text-center rounded-full hover:scale-105 transition-transform active:scale-95">
          Selengkapnya
        </button>
      </div>
      {/* Bottom Section */}
      {/* UMKM Swiper Slider */}
      <div className="mt-20 ">
        <UMKMSlider />
      </div>
    </section>
  );
};

export default UMKMSection;
