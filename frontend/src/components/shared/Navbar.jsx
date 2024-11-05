import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen h-[50px] bg-primary text-secondary px-8 fixed top-0 left-0 z-20">
      {/* Logo dan Toggle Menu */}
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/">
          <div className="text-xl font-bold">Desa Kademangan</div>
        </Link>

        {/* Toggle Button untuk Mobile */}
        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icon Hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu Navigation */}
        <ul
          className={`md:flex md:space-x-8 md:static absolute top-full left-0 w-full bg-primary md:w-auto md:bg-transparent md:items-center transition-all duration-300 ease-in ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/struktur"
            className="hover:text-gray-300 cursor-pointer px-6 py-2 md:py-0 md:px-0 w-full text-center"
          >
            <p>Struktur</p>
          </Link>
          <Link
            to="/berita"
            className="hover:text-gray-300 cursor-pointer px-6 py-2 md:py-0 md:px-0 w-full text-center"
          >
            <p>Berita</p>
          </Link>

          <Link
            to="/layanan"
            className="hover:text-gray-300 cursor-pointer px-6 py-2 md:py-0 md:px-0 w-full text-center"
          >
            <p>Pelayanan</p>
          </Link>

          <Link
            to="/pengaduan"
            className="hover:text-gray-300 cursor-pointer px-6 py-2 md:py-0 md:px-0 w-full text-center"
          >
            <p>Pengaduan</p>
          </Link>
          <Link
            to="/umkm"
            className="hover:text-gray-300 cursor-pointer px-6 py-2 md:py-0 md:px-0 w-full text-center"
          >
            <p>Umkm</p>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
