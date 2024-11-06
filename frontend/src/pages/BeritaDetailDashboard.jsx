import { useParams, useLoaderData, Link } from "react-router-dom";

const BeritaDetailDashboard = () => {
  const { id } = useParams();
  const berita = useLoaderData();
  const dateOnly = new Date(berita[0].createdon).toISOString().split("T")[0];
  const deleteBerita = async (jobId) => {
    const confirm = window.confirm("Are you sure to delete this Berita?");

    if (!confirm) return;
    try {
      const res = await fetch(`http://localhost:3000/berita/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        window.location.replace(`/dashboard/Berita`);
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-wrap container bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <img
          src={`http://localhost:3000/uploads/${berita[0].gambar}`}
          className="w-full object-cover object-center rounded-md h-[252px]"
          alt="gambar 1"
        />
        <section className=" text-primary w-full mt-4 text-center">
          <h1 className="text-3xl font-bold">{berita[0].judul}</h1>
          <p className="text-base font-semibold">Dibuat : {dateOnly}</p>
        </section>
        <div className="w-full mt-2 mb-2 flex items-center justify-center text-secondary font-semibold gap-2">
          <Link
            to={`/dashboard/Edit-Berita/${id}`}
            className="px-3 py-2 rounded-md bg-green-500"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteBerita(berita[0].id)}
            className="px-3 py-2 rounded-md bg-red-500"
          >
            Delete
          </button>
        </div>

        <section className=" text-primary w-full mt-4 text-center px-4">
          <p className="text-base font-semibold">{berita[0].deskripsi}</p>
        </section>
      </div>
    </div>
  );
};

const beritaLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/berita/${params.id}`);
  const data = await res.json();
  return data;
};

export { BeritaDetailDashboard as default, beritaLoader };
