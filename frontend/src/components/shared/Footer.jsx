import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full py-8 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 px-4">
        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <div className="aspect-square w-[150px] md:w-[200px] bg-gray-600 flex items-center justify-center">
            Logo
          </div>
        </div>

        {/* Kontak */}
        <div className="flex flex-col w-full md:w-[275px] items-center md:items-start text-center md:text-left gap-y-4 md:gap-y-8">
          <div className="text-lg md:text-xl font-medium capitalize">
            Kontak
          </div>
          <div className="flex flex-col gap-y-2">
            <p>
              Desa Kademangan, Kecamatan Mande, Kabupaten Cianjur, Jawa Barat,
              43292.
            </p>
            <p>Telepon: +62 81890503585 Email: loremipsum@gmail.com</p>
          </div>
        </div>

        {/* Tautan */}
        <div className="flex flex-col w-full md:w-auto items-center md:items-start text-center md:text-left gap-y-4 md:gap-y-8">
          <div className="text-lg md:text-xl font-medium capitalize">
            Tautan
          </div>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link
                className="underline underline-offset-1 capitalize hover:cursor-pointer"
                to="/"
              >
                Lorem ipsum dolor sit amet consectetu
              </Link>
            </li>
            <li>
              <Link
                className="underline underline-offset-1 capitalize hover:cursor-pointer"
                to="/"
              >
                Lorem ipsum dolor sit amet consectetu
              </Link>
            </li>
            <li>
              <Link
                className="underline underline-offset-1 capitalize hover:cursor-pointer"
                to="/"
              >
                Lorem ipsum dolor sit amet consectetu
              </Link>
            </li>
            <li>
              <Link
                className="underline underline-offset-1 capitalize hover:cursor-pointer"
                to="/"
              >
                Lorem ipsum dolor sit amet consectetu
              </Link>
            </li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div className="flex flex-col w-full md:w-auto items-center md:items-start text-center md:text-left gap-y-4 md:gap-y-8">
          <div className="text-lg md:text-xl font-medium capitalize">
            Media Sosial
          </div>
          <div className="flex gap-x-6 items-center w-full justify-center md:justify-start mt-4 md:mt-8">
            <Link to="/">
              <img
                src="./Instagram.png"
                className="w-8 md:w-10 aspect-square"
                alt="Instagram"
              />
            </Link>
            <Link to="/">
              <img
                src="./Facebook.png"
                className="w-8 md:w-10 aspect-square"
                alt="Facebook"
              />
            </Link>
            <Link to="/">
              <img
                src="./Youtube.png"
                className="w-8 md:w-10 aspect-square"
                alt="YouTube"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
