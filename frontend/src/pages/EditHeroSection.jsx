import { useState } from "react";

const EditHeroSection = () => {
  const [judul, setJudul] = useState("");
  const [gambar, setGamber] = useState("");
  const [file, setFile] = useState(null);
  return (
    <div className="flex flex-wrap container  bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold">Edit Hero Section</h1>
        </div>
        <div className="w-full py-2">
          {file && (
            <img
              className="w-full object-cover object-center"
              src={URL.createObjectURL(file)}
              alt=""
            />
          )}
        </div>
        <form className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="judul"
            >
              Judul
            </label>
            <input
              type="text"
              id="judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan judul berita"
            />
          </div>
          {/* Input Gambar */}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="gambar"
            >
              Gambar
            </label>
            <input
              type="file"
              id="gambar"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan gambar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHeroSection;
