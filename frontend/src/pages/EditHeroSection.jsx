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
        <div className="w-full py-2 relative">
          {file && (
            <>
              <img
                className="w-full h-[250px] rounded-md object-cover object-center"
                src={URL.createObjectURL(file)}
                alt=""
              />
              <h1 className="text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary text-center">
                {judul}
              </h1>
            </>
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
          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditHeroSection;
