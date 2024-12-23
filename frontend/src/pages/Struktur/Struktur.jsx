const Struktur = () => {
  return (
    <section className="struktur mx-5 my-[200px]">
      <h1 className="text-[#558B6E] font-bold text-4xl leading-[60px] text-justify">
        Struktur
      </h1>
      <hr className="w-full h-[2px] my-6 bg-[#558B6E] mx-auto" />

      <div className="row1 flex flex-wrap mt-6 justify-center">
        <div className="anggota w-[375px] h-[580px] m-6">
          <img
            src="./Venti.jpeg"
            alt="Foto Anggota"
            title="Venti"
            className="w-full h-[500px]"
          />
          <h3 className="text-[#558B6E] font-bold text-2xl text-center mt-2">
            Anemo Archon
          </h3>
          <p className="text-[#558B6E] font-normal text-lg text-center mt-1">
            Venti
          </p>
        </div>
      </div>

      <div className="row2 flex flex-wrap justify-center mt-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="anggota w-[375px] h-[580px] m-6">
            <img
              src="./Venti.jpeg"
              alt="Foto Anggota"
              title="Venti"
              className="w-full h-[500px]"
            />
            <h3 className="text-[#558B6E] font-bold text-2xl text-center mt-2">
              Anemo Archon
            </h3>
            <p className="text-[#558B6E] font-normal text-lg text-center mt-1">
              Venti
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Struktur;
