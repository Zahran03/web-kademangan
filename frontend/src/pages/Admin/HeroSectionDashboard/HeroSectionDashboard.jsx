import { useEffect, useState } from "react";

const HeroSectionDashboard = () => {
  const [heroSections, setHeroSection] = useState([]);
  useEffect(() => {
    const heroSectionFetch = async () => {
      const res = await fetch("http://localhost:3000/api/heroSection");
      const data = await res.json();
      setHeroSection(data);
    };
    heroSectionFetch();
  }, []);
  return (
    <div className="flex flex-wrap container  bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <h1 className="text-3xl text-primary font-bold mb-12">
          Hero Section Dashboard
        </h1>
        <div className="mb-8">
          <button className="font-semibold bg-primary text-secondary px-3 py-2 rounded-md">
            <Link to="/dashboard/PostBerita">Buat Hero Section</Link>
          </button>
        </div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <form className="w-full">
            <input
              type="text"
              className="w-full px-1 py-3 border border-primary rounded-md"
            />
          </form>

          <button className="bg-primary text-secondary px-3 py-3 inline-flex items-center rounded-md">
            Cari
          </button>
        </div>
        {/* <BarAction /> */}
        <Table columns={columns} route={"Berita"} data={heroSections} />
      </div>
    </div>
  );
};

export default HeroSectionDashboard;
