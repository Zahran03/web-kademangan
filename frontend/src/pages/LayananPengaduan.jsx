import React from "react";

const LayananPengaduan = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mx-3 mt-[150px] mb-[376px]">
      <h1 className="text-3xl font-bold text-green-700 mt-10">
        Layanan Pengaduan
      </h1>
      <div className="flex flex-col md:flex-row mt-10 w-full max-w-[850px] bg-primary rounded-lg overflow-hidden shadow-lg">
        {/* Gambar Samping */}
        <img
          src="./Pengaduan_img.png"
          alt="Pengaduan"
          className="w-full md:w-2/5 h-64 md:h-auto object-cover"
        />

        {/* Formulir Pengaduan */}
        <div className="flex flex-col items-start p-6 md:p-10 w-full md:w-3/5">
          <form className="flex flex-col space-y-6 w-full">
            {/* Nama Pengadu */}
            <div className="flex items-center space-x-3 border-b border-white pb-2">
              <span className="text-white text-xl">👤</span>
              <input
                type="text"
                name="name_user"
                placeholder="Nama Pengadu"
                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>

            {/* Telepon Pengadu */}
            <div className="flex items-center space-x-3 border-b border-white pb-2">
              <span className="text-white text-xl">📞</span>
              <input
                type="text"
                name="telepon"
                placeholder="Telepon Pengadu"
                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>

            {/* Kategori */}
            <div className="flex items-center space-x-3 border-b border-white pb-2">
              <span className="text-white text-xl">📋</span>
              <select
                name="category"
                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih Kategori
                </option>
                <option value="complaint" className="text-primary">
                  Pengaduan
                </option>
                <option value="suggestion" className="text-primary">
                  Saran
                </option>
                <option value="inquiry" className="text-primary">
                  Pertanyaan
                </option>
                <option value="other" className="text-primary">
                  Lainnya
                </option>
              </select>
            </div>

            {/* Pesan */}
            <div className="flex items-start space-x-3 border-b border-white pb-2">
              <span className="text-white text-xl">✉️</span>
              <textarea
                name="message"
                rows="3"
                placeholder="Masukkan pesan di sini..."
                className="w-full bg-transparent text-white placeholder-white focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <button
              type="submit"
              className="self-end mt-4 px-6 py-2 bg-white text-green-700 rounded-full shadow-md hover:bg-gray-200 transition-all"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LayananPengaduan;
