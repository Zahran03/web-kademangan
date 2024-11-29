import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

const UmkmDetail = () => {
  const { id } = useParams();
  const umkm = useLoaderData();
  const dateOnly = new Date(umkm[0].created_at).toISOString().split("T")[0];
  return (
    <div className="flex flex-wrap container bg-secondary rounded-md mb-[376px]">
      <div className="w-full mx-auto px-6 mt-[50px]">
        <Link to="/umkm" className="w-full">
          <p className="font-bold py-3"> ⬅️ Kembali</p>
        </Link>
        <img
          src={`http://localhost:3000/uploads/${umkm[0].gambar}`}
          className="w-full object-cover object-center rounded-md h-[252px]"
          alt="gambar 1"
        />
        <section className=" text-primary w-full mt-4 text-center">
          <h1 className="md:text-3xl text-2xl font-bold">
            {umkm[0].nama_umkm}
          </h1>
          <p className="text-base font-semibold">Dibuat : {dateOnly}</p>
        </section>

        <section className=" text-primary w-full mt-4 text-center px-4">
          <p className="text-base font-semibold">{umkm[0].deskripsi}</p>
        </section>
      </div>
    </div>
  );
};

export default UmkmDetail;
