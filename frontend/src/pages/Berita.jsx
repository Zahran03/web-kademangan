const Berita = () => {
  const beritaItems = [
    {
      imgSrc: "src/pemandangandesa.webp",
      title: "Judul Berita",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi dolorum voluptatibus doloremque aspernatur excepturi. Dolores, debitis delectus. Aut rerum et tenetur? Nemo, quidem sunt.",
    },
    {
      imgSrc: "src/pemandangandesa.webp",
      title: "Judul Berita",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi dolorum voluptatibus doloremque aspernatur excepturi. Dolores, debitis delectus. Aut rerum et tenetur? Nemo, quidem sunt.",
    },
    {
      imgSrc: "src/pemandangandesa.webp",
      title: "Judul Berita",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi dolorum voluptatibus doloremque aspernatur excepturi. Dolores, debitis delectus. Aut rerum et tenetur? Nemo, quidem sunt.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center px-32 mt-20">
      <h1 className="text-5xl font-bold text-[#558B6E]">Berita</h1>
      <hr className="w-full h-[2px] my-6 bg-[#558B6E] mx-auto" />

      {beritaItems.map((item, index) => (
        <div key={index} className="flex flex-row justify-center mt-6">
          <img
            src={item.imgSrc}
            alt="Thumbnail"
            className="w-[275px] h-[154.5px]"
          />
          <div className="ml-6">
            <a
              href="layananmasyarakat.html"
              className="text-2xl font-bold text-[#558B6E] underline"
            >
              {item.title}
            </a>
            <p className="mt-2 text-lg text-[#558B6E]">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Berita;
