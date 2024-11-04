import Table from "../components/dashboard/Table";
import { useState, useEffect } from "react";

const BeritaDashboard = () => {
  const [dataBerita, setDataBerita] = useState([]);
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await fetch("http://localhost:3000/berita");
        const data = await res.json();
        setDataBerita(data);
      } catch (error) {}
    };
    fetchBerita();
  }, []);

  const columns = [
    { Header: "Judul", accessor: "judul" },
    { Header: "Gambar", accessor: "gambar" },
    { Header: "Deskripsi", accessor: "deskripsi" },
  ];

  return (
    <div className="flex flex-wrap container  bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <h1 className="text-3xl text-primary font-bold mb-20">Data Berita</h1>
        <div className="flex items-center justify-between gap-3 mb-5">
          <form className="w-full">
            <input
              type="text"
              className="w-full px-1 py-3 border border-primary rounded-md"
            />
          </form>

          <button className="bg-primary text-secondary px-3 py-3 inline-flex items-center rounded-md">
            Cari
          </button>
        </div>
        {/* <BarAction /> */}
        <Table columns={columns} data={dataBerita} />
      </div>
    </div>
  );
};

export default BeritaDashboard;
