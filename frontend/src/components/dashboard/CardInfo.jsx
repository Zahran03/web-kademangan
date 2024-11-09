import { useState, useEffect } from "react";

const CardInfo = () => {
  const [berita, setBerita] = useState([]);
  const [umkm, setUmkm] = useState([]);
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await fetch("/berita");
        const dataBerita = await res.json();
        setBerita(dataBerita);
        fetchUmkm();
      } catch (error) {}
    };
    const fetchUmkm = async () => {
      try {
        const res = await fetch("/UMKM");
        const dataUmkm = await res.json();
        setUmkm(dataUmkm);
      } catch (error) {}
    };
    fetchUmkm();
    fetchBerita();
  }, []);

  return (
    <div className="w-full mx-auto mb-10">
      <div className="flex items-center justify-between flex-wrap gap-1">
        {/* kumpulan element info */}
        <div className="flex flex-col items-center justify-center w-[156px] px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
          <h1 className="text-xl">Data Berita</h1>
          <p className="text-xl">{berita.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[156px] px-4 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
          <h1 className="text-xl">Data Umkm</h1>
          <p className="text-xl">{umkm.length}</p>
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
