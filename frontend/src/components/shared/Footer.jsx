import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full h-full py-16">
      <div className="container mx-auto flex items-start justify-between">
        <div className="aspect-square w-[200px] bg-gray-600">Logo</div>
        {/* Kontak  */}
        <div className="flex flex-col w-full md:max-w-[300px] items-center md:items-start gap-y-4 md:gap-y-8">
          <div className="text-lg md:text-xl font-medium capitalize">
            Kontak
          </div>
          <div className="flex flex-col gap-y-8">
            <p>
              Desa Kademangan, Kecamatan Mande, Kabupaten Cianjur, Jawa Barat,
              43292.
            </p>
            <p>Telepon: +62 81890503585 Email: loremipsum@gmail.com</p>
          </div>
        </div>
        {/* Tautan  */}
        <div className="flex flex-col w-full md:max-w-[300px] items-center md:items-start gap-y-4 md:gap-y-8">
          <div className="text-lg md:text-xl font-medium capitalize">
            Tautan
          </div>
          <div>
            <ul className="flex flex-col gap-y-2 text-nowrap">
              <li>
                <Link
                  className="underline underline-offset-1 capitalize hover:cursor-pointer"
                  href="/"
                >
                  Lorem ipsum dolor sit amet consectetu
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-1 capitalize hover:cursor-pointer"
                  href="/"
                >
                  Lorem ipsum dolor sit amet consectetu
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-1 capitalize hover:cursor-pointer"
                  href="/"
                >
                  Lorem ipsum dolor sit amet consectetu
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-1 capitalize hover:cursor-pointer"
                  href="/"
                >
                  Lorem ipsum dolor sit amet consectetu
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Media Sosial  */}
        <div className="flex flex-col w-full md:max-w-[300px] items-center md:items-start gap-y-4 md:gap-y-8">
          <div className="text-lg md:text-xl font-medium capitalize">
            media sosial
          </div>
          <div className="flex gap-x-6 items-center mt-8 w-full">
            <Link href="/">
              <img src="./Instagram.png" className="w-10 aspect-square" />
            </Link>
            <Link href="/">
              <img src="./Facebook.png" className="w-10 aspect-square" />
            </Link>
            <Link href="/">
              <img src="./Youtube.png" className="w-10 aspect-square" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
