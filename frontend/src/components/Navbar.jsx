const Navbar = () => {
  return (
    <header class="bg-primary absolute top-0 left-0 w-full flex items-center z-10">
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="px-16">
            <a href="#home" class="font-bold text-lg text-secondary block py-6">
              Desa Kademangan
            </a>
          </div>
          <div class="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              class="block absolute right-4 lg:hidden"
              type="button"
            >
              <span class="w-[30px] h-[2px] my-2 block bg-black transition duration-300 origin-top-left ease-in-out"></span>
              <span class="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out"></span>
              <span class="w-[30px] h-[2px] my-2 block bg-black transition duration-300 origin-bottom-left ease-in-out"></span>
            </button>

            <nav
              id="nav-menu"
              class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:rounded-none lg:shadow-none lg:max-w-full"
            >
              <ul class="block lg:flex">
                <li class="group">
                  <a
                    href="#beranda"
                    class="text-base text-secondary py-2 mx-8 flex group-hover:text-primary"
                  >
                    Struktur
                  </a>
                </li>
                <li class="group">
                  <a
                    href="#tentang-saya"
                    class="text-base text-secondary py-2 mx-8 flex group-hover:text-primary"
                  >
                    Berita Desa
                  </a>
                </li>
                <li class="group">
                  <a
                    href="#portofolio"
                    class="text-base text-secondary py-2 mx-8 flex group-hover:text-primary"
                  >
                    Layanan Masyarakat
                  </a>
                </li>
                <li class="group">
                  <a
                    href="#client"
                    class="text-base text-secondary py-2 mx-8 flex group-hover:text-primary"
                  >
                    Pengaduan
                  </a>
                </li>
                <li class="group">
                  <a
                    href="#blog"
                    class="text-base text-secondary py-2 mx-8 flex group-hover:text-primary"
                  >
                    UMKM
                  </a>
                </li>
                {/* <li class="group">
                  <a
                    href="#contacts"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contacts
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
