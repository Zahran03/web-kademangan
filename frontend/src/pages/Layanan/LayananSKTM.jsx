import { useState } from "react";

const LayananSKTM = () => {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [sktm, setSktm] = useState("");
  const [suratPbb, setSuratPbb] = useState("");
  const [pasFoto, setPasfoto] = useState("");
  const persyaratan = [
    {
      title:
        "Surat pernyataan tidak mampu yang diketahui RT dan dua orang saksi",
    },
    { title: "Tanda lunas pajak bumi dan bangunan (PBB)" },
    {
      title:
        "Pas foto rumah dari posisi depan dan samping rumah, masing-masing ukuran 5R",
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
                  Syarat Pengajuan Surat Keterangan Tidak Mampu
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
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Surat pernyataan tidak mampu yang diketahui RT dan dua
                      orang saksi :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Tanda lunas pajak bumi dan bangunan (PBB) :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Pas foto rumah dari posisi depan dan samping rumah,
                      masing-masing ukuran 5R :
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

export default LayananSKTM;
