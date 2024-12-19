import { useState } from "react";

const LayananPindahDomisili = () => {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [ktp, setKtp] = useState("");
  const [kk, setKk] = useState("");
  const [formPerpindahan, setFormPerpindahan] = useState("");
  const [skpwni, setSkpwni] = useState("");
  const [pasFoto, setPasFoto] = useState("");

  const persyaratan = [
    { title: "Kartu Tanda Penduduk (KTP) asli dan fotokopi" },
    { title: "Kartu Keluarga (KK) asli dan fotokopi" },
    {
      title:
        "Formulir pendaftaran perpindahan penduduk dari Disdukcapil setempat atau melalui situs resmi",
    },
    {
      title:
        "Surat Keterangan Pindah Warga Negara Indonesia (SKPWNI) dari Disdukcapil asal, jika diperlukan",
    },
    {
      title: "Pas foto 3 – 5 lembar ukuran 3X4",
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
                      placeholder="Masukan Nama anda"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      NIK :
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan NIK anda"
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Kartu Tanda Penduduk :
                    </label>
                    <input
                      type="text"
                      placeholder="Upload Ktp anda"
                      value={ktp}
                      onChange={(e) => setKtp(e.target.value)}
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Kartu Keluarga :
                    </label>
                    <input
                      placeholder="Masukan KK anda"
                      value={kk}
                      onChange={(e) => setKk(e.target.value)}
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Pas Foto Ukuran 3 x 4 :
                    </label>
                    <input
                      placeholder="Upload Ktp anda"
                      value={pasFoto}
                      onChange={(e) => setPasFoto(e.target.value)}
                      type="file"
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
