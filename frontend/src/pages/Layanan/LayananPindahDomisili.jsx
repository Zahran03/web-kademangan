import React from "react";

const LayananPindahDomisili = () => {
  const persyaratan = [
    { title: "Kartu Tanda Penduduk (KTP)" },
    { title: "Kartu Keluarga (KK)" },
    {
      title:
        "Formulir pendaftaran perpindahan penduduk dari Disdukcapil kabupaten/kota atau situs resmi mereka",
    },
    {
      title:
        "Surat Keterangan Pindah Warga Negara Indonesia (SKPWNI) dari Disdukcapil asal, jika Anda pindah dari daerah lain",
    },
    {
      title:
        "Dokumen transmigrasi, jika Anda melakukan pindah melalui program transmigrasi",
    },
  ];
  return (
    <section>
      <div className="container px-[133px] mt-[200px] mb-[538px]">
        <div className="w-full flex items-center flex-col">
          <section>
            <h1 className="text-4xl text-primary font-bold">
              Layanan Pindah Domisili
            </h1>
          </section>
          <section className="mt-[150px]">
            <div className="w-[1175px] bg-primary flex items-center p-[25px]">
              <section className="text-primary w-1/2 bg-secondary py-[55px] px-[31px]">
                <h1 className="text-2xl">
                  Syarat Pengajuan Surat Pindah Domisili
                </h1>

                <ul className="list-disc">
                  {persyaratan.map((syarat) => (
                    <li>{syarat.title}</li>
                  ))}
                </ul>
              </section>
              <div className="text-secondary w-1/2 px-[44px] flex flex-col items-center">
                <h1 className="text-3xl font-bold text-center mb-[101px]">
                  Formulir Online
                </h1>
                <form className="w-full">
                  <div>
                    <label htmlFor="" className="block">
                      Nama :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      NIK :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default LayananPindahDomisili;
