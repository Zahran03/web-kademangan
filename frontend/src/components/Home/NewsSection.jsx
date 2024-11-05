import React from "react";

const NewsSection = () => {
  return (
    <section className="mt-20 max-w-[1175px] mx-auto px-4 md:px-1 mb-[150px]">
      <h2 className="text-2xl font-bold capitalize md:text-4xl text-center">
        berita terbaru
      </h2>
      {/* pembungkus card */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* element card */}
        <div className="flex flex-col bg-primary w-full aspect-square">
          <div>
            <img
              src="./image1.jpg"
              alt="news image"
              className="w-full h-[188px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-start gap-y-4 px-4 py-6">
            <h3 className="text-lg md:text-xl text-white capitalize font-semibold">
              judul berita
            </h3>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet consectetur. Ornare vel nulla tempor
              phasellus. Tempor vitae eu felis sed amet amet proin. Ultrices
              maecenas enim id feugiat malesuada ultricies vitae.
            </p>
          </div>
        </div>
        {/* element card */}
        <div className="flex flex-col bg-primary w-full aspect-square">
          <div>
            <img
              src="./image1.jpg"
              alt="news image"
              className="w-full h-[188px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-start gap-y-4 px-4 py-6">
            <h3 className="text-lg md:text-xl text-white capitalize font-semibold">
              judul berita
            </h3>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet consectetur. Ornare vel nulla tempor
              phasellus. Tempor vitae eu felis sed amet amet proin. Ultrices
              maecenas enim id feugiat malesuada ultricies vitae.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-primary w-full aspect-square">
          <div>
            <img
              src="./image1.jpg"
              alt="news image"
              className="w-full h-[188px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-start gap-y-4 px-4 py-6">
            <h3 className="text-lg md:text-xl text-white capitalize font-semibold">
              judul berita
            </h3>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet consectetur. Ornare vel nulla tempor
              phasellus. Tempor vitae eu felis sed amet amet proin. Ultrices
              maecenas enim id feugiat malesuada ultricies vitae.
            </p>
          </div>
        </div>
      </div>
      {/* pembungkus card */}
    </section>
  );
};

export default NewsSection;
