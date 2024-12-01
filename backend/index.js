const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");
const beritaRoutes = require("./routes/beritaRoutes");
const umkmRoutes = require("./routes/umkmRoutes");
const authRoutes = require("./routes/Auth");
const heroSectionRoutes = require("./routes/heroRoutes");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const multer = require("multer");

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
app.use("/api/auth", authRoutes);

// berita routes
app.use("/api/berita", beritaRoutes);

// UMKM Routes
app.use("/api/UMKM", umkmRoutes);

// heroSection Routes
app.use("/api/heroSection", heroSectionRoutes);

//upload poto handle
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file sudah di upload");
});

app.listen(port, () => {
  console.log("backend running");
});
