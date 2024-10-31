import HelpButtons from "./HelpButtons";

const AboutUsSection = () => {
  return (
    <section className="w-full bg-secondary flex items-center justify-center">
      <div className="my-[150px] w-[925px] h-[375px] bg-secondary flex justify-between gap-[75px] mx-[257px]">
        {/* Bagian Peta */}
        <div className="w-[375px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.874820276878!2d107.19413650000001!3d-6.773663449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69aca98aebb0bd%3A0x25ed11dc6d1dac2f!2sKademangan%2C%20Kec.%20Mande%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1730345323656!5m2!1sid!2sid"
            width="375"
            height="375"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* bagain text */}
        <section className="flex flex-col w-[475px] ">
          <h2 className="text-primary text-4xl font-semibold">
            Tentang Desa Kademangan
          </h2>

          <p className=" mt-[25px] h-[125px] mb-[25px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            porro quos! Provident animi, exercitationem aperiam maxime hic
            soluta autem adipisci. Esse eaque praesentium assumenda quas
            necessitatibus est ab quod ullam ea enim odio provident iusto ipsum
            magni ipsa impedit exercitationem, maiores harum,
          </p>

          <HelpButtons />

          {/* <section className="flex items-center justify-between w-[475px] mt-[20px]">
            <div className="w-[128px] h-[135px] flex flex-col items-center justify-center">
              <button className="w-[100px] h-[100px] bg-primary rounded-lg"></button>
              <p className="mt-2 w-">Struktur Desa</p>
            </div>
            <div className="w-[128px] h-[135px] flex flex-col items-center justify-center">
              <button className="w-[100px] h-[100px] bg-primary rounded-lg"></button>
            </div>
            <div className="w-[128px] h-[135px] flex flex-col items-center justify-center">
              <button className="w-[100px] h-[100px] bg-primary rounded-lg"></button>
            </div>
          </section> */}
        </section>
      </div>
    </section>
  );
};

export default AboutUsSection;
