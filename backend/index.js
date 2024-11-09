const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const beritaRoutes = require("./routes/beritaRoutes");
const umkmRoutes = require("./routes/umkmRoutes");
const authRoutes = require("./routes/Auth");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

// autentikasi
app.use("/auth", authRoutes);

// berita routes
app.use("/berita", beritaRoutes);

// UMKM Routes
app.use("/UMKM", umkmRoutes);

//upload poto handle
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file sudah di upload");
});

app.listen(port, () => {
  console.log("backend running");
});
