import { Link } from "react-router-dom";

const TableDashboard = () => {
  return (
    <div className="w-full bg-secondary flex-wrap">
      <h1 className="text-3xl text-primary font-bold">Lihat Tabel</h1>
      <div className="flex items-center justify-between w-full text-secondary px-2 py-2 border-2 border-primary rounded-md mb-1">
        <div className="text-primary text-lg font-semibold">
          <p>Berita</p>
        </div>
        <div>
          <button className="px-2 py-2 bg-primary text-secondary rounded-md">
            <Link to="/dashboard/Berita">Lihat</Link>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full text-secondary px-2 py-2 border-2 border-primary rounded-md mb-1">
        <div className="text-primary text-lg font-semibold">
          <p>UMKM</p>
        </div>
        <div>
          <button className="px-2 py-2 bg-primary text-secondary rounded-md">
            <Link to="/dashboard/Umkm">Lihat</Link>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full text-secondary px-2 py-2 border-2 border-primary rounded-md mb-1">
        <div className="text-primary text-lg font-semibold">
          <p>Pelayanan</p>
        </div>
        <div>
          <button className="px-2 py-2 bg-primary text-secondary rounded-md">
            Lihat
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full text-secondary px-2 py-2 border-2 border-primary rounded-md mb-1">
        <div className="text-primary text-lg font-semibold">
          <p>Pengaduan</p>
        </div>
        <div>
          <button className="px-2 py-2 bg-primary text-secondary rounded-md">
            Lihat
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableDashboard;
