import { useParams, useLoaderData, Link } from "react-router-dom";

const UmkmDetailDashboard = () => {
  const { id } = useParams();
  const umkm = useLoaderData();
  const dateOnly = new Date(umkm[0].created_at).toISOString().split("T")[0];
  return (
    <div className="flex flex-wrap container bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <img
          src={`http://localhost:3000/uploads/${umkm[0].gambar}`}
          className="w-full object-cover object-center rounded-md h-[252px]"
          alt="gambar 1"
        />
        <section className=" text-primary w-full mt-4 text-center">
          <h1 className="text-3xl font-bold">{umkm[0].nama_umkm}</h1>
          <p className="text-base font-semibold">Dibuat : {dateOnly}</p>
          <p className="text-base font-semibold">{umkm[0].kategori}</p>
        </section>

        <div className="w-full mt-2 mb-2 flex items-center justify-center text-secondary font-semibold gap-2">
          <Link to="/" className="px-3 py-2 rounded-md bg-green-500">
            Edit
          </Link>
          <Link to="/" className="px-3 py-2 rounded-md bg-red-500">
            Delete
          </Link>
        </div>

        <section className=" text-primary w-full mt-4 text-center px-4">
          <p className="text-base font-semibold">{umkm[0].deskripsi}</p>
        </section>
      </div>
    </div>
  );
};

const umkmLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/UMKM/${params.id}`);
  const data = await res.json();
  return data;
};

export { UmkmDetailDashboard as default, umkmLoader };
