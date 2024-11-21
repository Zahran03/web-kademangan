import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

const BeritaDetail = () => {
  const { id } = useParams();
  const berita = useLoaderData();

  return (
    <div className="flex flex-wrap container bg-secondary rounded-md">
      <div className="w-full mx-auto">
        {/* <Link to="/dashboard/Berita" className="w-full">
          <p className="font-bold py-3"> ⬅️ Kembali</p>
        </Link>
        <img
          src={`http://localhost:3000/uploads/${berita[0].gambar}`}
          className="w-full object-cover object-center rounded-md h-[252px]"
          alt="gambar 1"
        />
        <section className=" text-primary w-full mt-4 text-center">
          <h1 className="text-3xl font-bold">{berita[0].judul}</h1>
          {/* <p className="text-base font-semibold">Dibuat : {dateOnly}</p> */}
        {/* </section>

        <section className=" text-primary w-full mt-4 text-center px-4">
          <p className="text-base font-semibold">{berita[0].deskripsi}</p>
        </section> */}

        <p className="mt-10 mb-10 font-bold text-4xl">Test {id}</p>
      </div>
    </div>
  );
};

export default BeritaDetail;
