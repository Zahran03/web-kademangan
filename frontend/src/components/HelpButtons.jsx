const HelpButtons = () => {
  return (
    <section className="flex items-center justify-between w-[475px] mt-[20px]">
      <div className="w-[128px] h-[135px] flex flex-col items-center justify-center">
        <button className="w-[100px] h-[100px] bg-primary rounded-lg"></button>
        <p className="mt-2 w-">Struktur Desa</p>
      </div>
      <div className="w-[195px] h-[135px] flex flex-col items-center justify-center">
        <button className="w-[100px] h-[100px] bg-primary rounded-lg"></button>
        <p className="mt-2 w-">Layanan Masyarakat</p>
      </div>
      <div className="w-[128px] h-[135px] flex flex-col items-center justify-center">
        <button className="w-[100px] h-[100px] bg-primary rounded-lg"></button>
        <p className="mt-2 w-">Pengaduan</p>
      </div>
    </section>
  );
};

export default HelpButtons;
