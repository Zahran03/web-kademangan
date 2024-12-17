import { useState } from "react";

const LayananBPJS = () => {
  const [ktp, setKtp] = useState("");
  const [kk, setKK] = useState("");
  const [rekening, setRekening] = useState("");
  const [npwp, setNpwp] = useState("");
  const [pasFoto, setPasFoto] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");

  const persyaratan = [
    { title: "Kartu Tanda Penduduk (KTP)" },
    { title: "Kartu Keluarga (KK)" },
    {
      title: "Buku rekening tabungan yang aktif ",
    },
    {
      title: "Nomor Pokok Wajib Pajak (NPWP) jika ada",
    },
    {
      title: "Pas foto berukuran 3×4 dengan ukuran maksimal 50kb",
    },
    {
      title: "Nomor handphone",
    },
    {
      title: "Alamat email",
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
                <h1 className="text-2xl">Syarat Pengajuan Surat BPJS</h1>

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
                      Kartu Keluarga :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Buku Rekening Aktif :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      NPWP jika ada :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Pas foto berukuran 3×4 maksimal 50kb :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Nomor Handphone :
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary border-b-2 border-secondary"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="block">
                      Alamat Email :
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

export default LayananBPJS;
