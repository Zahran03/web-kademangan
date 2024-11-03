import React from "react";

const CardInfo = () => {
  return (
    <div className="w-full mx-auto mb-10">
      <div className="flex items-center justify-between flex-wrap gap-1">
        {/* kumpulan element info */}
        <div className="flex flex-col items-center justify-center w-[156px] px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
          <h1 className="text-xl">Data Berita</h1>
          <p className="text-xl">2</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[156px] px-4 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
          <h1 className="text-xl">Data Umkm</h1>
          <p className="text-xl">2</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[156px] px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
          <h1 className="text-xl">Pengaduan</h1>
          <p className="text-xl">2</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[156px] px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
          <h1 className="text-xl">Pelay KK</h1>
          <p className="text-xl">2</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[156px] px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
          <h1 className="text-xl">Pelay KTP</h1>
          <p className="text-xl">2</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[156px] px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
          <h1 className="text-xl">Pelay SKTM</h1>
          <p className="text-xl">2</p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
