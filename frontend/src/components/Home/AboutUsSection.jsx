import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="container flex items-center justify-center mx-auto mt-[150px]">
      <div className="w-full md:max-w-[1080px] flex md:flex-row flex-col items-center md:items-start justify-between">
        {/* GMaps iframe  */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.874820276878!2d107.19413650000001!3d-6.773663449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69aca98aebb0bd%3A0x25ed11dc6d1dac2f!2sKademangan%2C%20Kec.%20Mande%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1730345323656!5m2!1sid!2sid"
          width="375"
          height="375"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl w-full md:max-w-[375px] aspect-square"
        />
        <div className="flex flex-col gap-y-8 flex-1 max-w-[600px] px-6 md:px-0 mt-10 md:mt-0">
          <div>
            <h2 className="text-3xl font-bold capitalize md:text-4xl text-center md:text-left">
              tentang desa kademangan
            </h2>
            <p className="text-lg md:text-xl text-justify mt-4">
              Kademangan adalah desa yang berada kecamatan Mande, Cianjur, Jawa
              Barat, Indonesia. Desa ini termasuk wilayah datar yang cukup luas
              diantara desa lain yang berada di kecamatan mande. Desa kademangan
              memiliki karakteristik bersifat agraris dengan mata pencarian
              sebagian besar penduduknya bercocok tanam dengan hasil utama padi.
            </p>
          </div>
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-y-4">
              <Link
                to="/struktur"
                className="p-4 bg-primary w-fit aspect-square rounded-xl"
              >
                <img
                  src="./gmail_groups.png"
                  alt="gmail icon"
                  className="w-[50px]"
                />
              </Link>
              <span className="md:text-xl text-lg capitalize font-semibold">
                struktur desa
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Link
                to="/layanan"
                className="p-4 bg-primary w-fit aspect-square rounded-xl"
              >
                <img
                  src="./chat_bubble.png"
                  alt="chat bubble icon"
                  className="w-[50px]"
                />
              </Link>
              <span className="md:text-xl text-lg capitalize font-semibold">
                layanan masyarakat
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Link
                to="/pengaduan"
                className="p-4 bg-primary w-fit aspect-square rounded-xl"
              >
                <img src="./inbox.png" alt="inbox icon" className="w-[50px]" />
              </Link>
              <span className="md:text-xl text-lg capitalize font-semibold">
                pengaduan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
