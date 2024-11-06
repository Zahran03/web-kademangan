import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import { useLoaderData, useParams } from "react-router-dom";

const EditUmkm = () => {
  const { id } = useParams();
  const umkm = useLoaderData();
  const [nama_umkm, setNama_umkm] = useState(umkm[0].nama_umkm);
  const [kategori, setKategori] = useState(umkm[0].kategori);
  const [deskripsi, setDeskripsi] = useState(umkm[0].deskripsi);
  const [file, setFile] = useState(null);

  // Fungsi handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sanitize and get plain text description
    const sanitizedDeskripsi = DOMPurify.sanitize(deskripsi);
    const plainTextDeskripsi =
      new DOMParser().parseFromString(sanitizedDeskripsi, "text/html").body
        .textContent || "";

    // Object to hold the new post data
    const updateUmkm = {
      nama_umkm,
      kategori,
      deskripsi: plainTextDeskripsi,
    };

    // Upload file if exists
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      try {
        const uploadResponse = await fetch("http://localhost:3000/upload", {
          method: "POST",
          body: data,
        });

        if (uploadResponse.ok) {
          updateUmkm.gambar = filename;
        } else {
          throw new Error("File upload failed");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        return;
      }
    }

    // Send new post data to server
    try {
      const res = await fetch(`http://localhost:3000/UMKM/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUmkm),
      });

      if (res.ok) {
        window.location.replace(`/dashboard/Umkm/${id}`);
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-wrap container bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-xl p-8 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Form Input Update Berita
            </h1>
            <div className="w-full py-2 ">
              {/* Display the uploaded image if file exists, otherwise display the existing image */}
              {file ? (
                <img
                  className="w-full object-cover object-center"
                  src={URL.createObjectURL(file)}
                  alt="Preview of uploaded image"
                />
              ) : (
                <img
                  className="w-full object-cover object-center"
                  src={`http://localhost:3000/uploads/${umkm[0].gambar}`}
                  alt="Existing image"
                />
              )}
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

              {/* edit kategori */}
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
                className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 "
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

export default EditUmkm;
