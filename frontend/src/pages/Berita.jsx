import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Berita = () => {
  const [beritaItems, setBeritaItems] = useState([]);
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const data = await fetch("http://localhost:3000/berita");
        const res = await data.json();
        setBeritaItems(res);
      } catch (error) {
        console.error("error while fetching data");
      }
    };
    fetchBerita();
  }, []);
  return (
    <section className="w-full  flex flex-col justify-center px-5 mt-[200px] mb-[125px] md:px-[133px]">
      <h1 className="text-5xl font-bold text-[#558B6E]">Berita</h1>
      <hr className="w-full h-[2px] my-6 bg-[#558B6E] mx-auto" />

      {beritaItems.map((berita, index) => (
        <div
          key={index}
          className="flex md:flex-row flex-col justify-center mt-10 items-center "
        >
          <img
            src={`http://localhost:3000/uploads/${berita.gambar}`}
            alt="Thumbnail"
            className="w-[400px] md:w-[275px] h-[154.5px]"
          />
          <div className="ml-6 mt-3">
            <Link
              to={`/berita/${berita.id}`}
              className="text-2xl font-bold text-[#558B6E] underline"
            >
              {berita.judul}
            </Link>
            <p className="mt-2 text-lg text-[#558B6E]">{berita.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Berita;
