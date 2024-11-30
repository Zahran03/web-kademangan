import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarDashboard = () => {
  // State untuk mengatur apakah menu navigasi terlihat atau tidak
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary p-4 mb-3 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none sm:hidden"
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

        {/* Menu Navigasi untuk Desktop (disembunyikan di mobile) */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/dashboard" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/heroSlider" className="text-white hover:text-gray-200">
            Hero Slider
          </Link>
          <Link
            to="/dashboard/Berita"
            className="text-white hover:text-gray-200"
          >
            Berita
          </Link>
          <Link to="/dashboard/Umkm" className="text-white hover:text-gray-200">
            UMKM
          </Link>
          <a href="#" className="text-white hover:text-gray-200">
            Pelayanan
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Pengaduan
          </a>
        </div>
      </div>

      {/* Menu Navigasi untuk Mobile (toggle) */}
      {isOpen && (
        <div className="sm:hidden mt-2 bg-secondary rounded-md shadow-lg p-4 space-y-2">
          <a href="#" className="block text-primary hover:text-gray-700 mb-2">
            Home
          </a>
          <a href="#" className="block text-primary hover:text-gray-700 mb-2">
            About
          </a>
          <a href="#" className="block text-primary hover:text-gray-700 mb-2">
            Services
          </a>
          <a href="#" className="block text-primary hover:text-gray-700 mb-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarDashboard;
