import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
const EditBerita = () => {
  const { id } = useParams();
  const berita = useLoaderData();
  const [judul, setJudul] = useState(berita[0].judul);
  const [deskripsi, setDeskripsi] = useState(berita[0].deskripsi);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedDeskripsi = DOMPurify.sanitize(deskripsi);
    const plainTextDeskripsi =
      new DOMParser().parseFromString(sanitizedDeskripsi, "text/html").body
        .textContent || "";

    const updateBerita = {
      judul,
      deskripsi: plainTextDeskripsi,
    };

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
          updateBerita.file = filename;
        } else {
          throw new Error("File upload failed");
        }
      } catch (error) {
        console.error("Error uploading file :", error);
      }
    }

    try {
      const res = await fetch(`http://localhost:3000/api/berita/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateBerita),
      });

      if (res.ok) {
        window.location.replace(`/dashboard/Berita/${berita[0].id}`);
      } else {
        console.error("Error updating berita");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="flex flex-wrap container bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-xl p-8 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Form Edit Berita
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
                  src={`http://localhost:3000/uploads/${berita[0].gambar}`}
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

export default EditBerita;
