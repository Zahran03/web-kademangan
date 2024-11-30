import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

const CreateUmkm = () => {
  const [nama_umkm, setNama_umkm] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitizedDeskripsi = DOMPurify.sanitize(deskripsi);
    const plainTextDeskripsi =
      new DOMParser().parseFromString(sanitizedDeskripsi, "text/html").body
        .textContent || "";
    const newPost = {
      nama_umkm,
      kategori,
      deskripsi: plainTextDeskripsi,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.gambar = filename;
      try {
        const uploadResponse = await fetch("http://localhost:3000/api/upload", {
          method: "POST",
          body: data,
        });
        if (uploadResponse.ok) {
          newPost.gambar = filename;
        } else {
          throw new Error("file upload failed");
        }
      } catch (err) {
        console.error("Error upload file :", err);
        return;
      }
    }
    try {
      const res = await fetch("http://localhost:3000/UMKM/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      window.location.replace("/dashboard/Umkm");
    } catch (error) {}
  };
  return (
    <div className="flex flex-wrap container bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-xl p-8 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Tambah Data Umkm
            </h1>
            <div className="w-full py-2">
              {file && <img src={URL.createObjectURL(file)} alt="" />}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input Judul */}
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="judul"
                >
                  Nama Umkm
                </label>
                <input
                  type="text"
                  id="judul"
                  value={nama_umkm}
                  onChange={(e) => setNama_umkm(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan Nama Umkm"
                />
              </div>

              {/* Input Kategori */}
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="kategori"
                >
                  Kategori
                </label>
                <select
                  id="kategori"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Pilih kategori</option>
                  <option value="Peternakan">Peternakan</option>
                  <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                  <option value="Pengolahan Pangan Lokal">
                    Pengolahan Pangan Lokal
                  </option>
                  <option value="Wisata">Wisata</option>
                  <option value="Penginapan">Penginapan</option>
                  <option value="Kuliner">Kuliner</option>
                </select>
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

              {/* Input Deskripsi menggunakan React Quill */}
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="deskripsi"
                >
                  Deskripsi
                </label>
                <ReactQuill
                  value={deskripsi}
                  onChange={setDeskripsi}
                  placeholder="Masukkan deskripsi berita"
                  className="bg-white mb-8 h-[200px]"
                />
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUmkm;
