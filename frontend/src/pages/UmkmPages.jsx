import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UmkmPages = () => {
  const [umkmData, setUmkmData] = useState([]);
  useEffect(() => {
    const fetchUmkm = async () => {
      const res = await fetch("http://localhost:3000/api/UMKM");
      const data = await res.json();
      setUmkmData(data);
    };
    fetchUmkm();
  }, []);

  return (
    <section className="px-32 mt-[200px] mb-[213px]">
      <h1 className="text-5xl font-bold text-[#558B6E] text-center">UMKM</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {umkmData.map((umkm, index) => (
          <Link to={`/Umkm/${umkm.id}`}>
            <div
              key={index}
              className="w-[375px] h-[275px] m-6 rounded-lg bg-[#558B6E] flex flex-col items-start p-6"
            >
              <h2 className="text-3xl font-bold text-white">
                {umkm.nama_umkm}
              </h2>
              <p className="mt-2 text-lg text-white">{umkm.deskripsi}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UmkmPages;
