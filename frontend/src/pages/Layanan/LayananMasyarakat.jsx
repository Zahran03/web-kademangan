import { Link } from "react-router-dom";

const LayananMasyarakat = () => {
  const layananItems = [
    {
      title: "Pindah Domisili",
      description: "Lorem ipsum dolor sit amet.",
      link: "LayananSuratPindahDomisili",
    },
    {
      title: "LayananPengajuanBPJS",
      description: "Lorem ipsum dolor sit amet.",
      link: "LayananPengajuanBPJS",
    },
    {
      title: "LayananPengajuanSKTM",
      description: "Lorem ipsum dolor sit amet.",
      link: "LayananPengajuanSKTM",
    },
  ];

  return (
    <section className="px-32 mt-[200px] mb-[213px]">
      <h1 className="text-5xl font-bold text-[#558B6E] text-center">
        Layanan Masyarakat
      </h1>
      <div className="flex flex-wrap justify-center mt-10">
        {layananItems.map((item, index) => (
          <Link to={`/${item.link}`}>
            <div
              key={index}
              className="w-[375px] h-[275px] m-6 rounded-lg bg-[#558B6E] flex flex-col items-start p-6"
            >
              <h2 className="text-3xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-lg text-white">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LayananMasyarakat;
