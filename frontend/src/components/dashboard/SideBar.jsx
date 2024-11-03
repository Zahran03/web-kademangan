import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="hidden md:flex ">
      <div className="flex flex-col mr-4 text-secondary">
        <button className="bg-primary hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-8 py-2 text-xl font-medium">
          <Link to="/dashboard">Dashboard</Link>
        </button>
        <button className=" bg-primary hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-3 py-2 text-xl font-medium mt-2">
          <Link to="/dashboard/berita">Berita</Link>
        </button>
        <button className=" bg-primary hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-3 py-2 text-xl font-medium mt-2">
          <Link to="/dashboard/Umkm">UMKM</Link>
        </button>
        <button className=" bg-primary hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-3 py-2 text-xl font-medium mt-2">
          <Link to="/dashboard">Layanan</Link>
        </button>
        <button className=" bg-primary hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-3 py-2 text-xl font-medium mt-2">
          <Link to="/dashboard">Pengaduan</Link>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
