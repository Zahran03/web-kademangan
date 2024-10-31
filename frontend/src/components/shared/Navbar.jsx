const Navbar = () => {
  return (
    <nav className="w-screen h-[50px] bg-primary text-secondary flex justify-between items-center px-40 fixed top-0 left-0 z-10">
      {/* Logo */}
      <div className="text-xl font-bold">Desa Kademangan</div>

      {/* Menu Navigation */}
      <ul className="flex space-x-8">
        <li className="hover:text-gray-300 cursor-pointer">Struktur</li>
        <li className="hover:text-gray-300 cursor-pointer">
          Layanan Masyarakat
        </li>
        <li className="hover:text-gray-300 cursor-pointer">Pengaduan</li>
        <li className="hover:text-gray-300 cursor-pointer">UMKM</li>
      </ul>
    </nav>
  );
};

export default Navbar;
