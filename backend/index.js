const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
// const env = require("dotenv");
const beritaRoutes = require("./routes/beritaRoutes");
const umkmRoutes = require("./routes/umkmRoutes");

app.use(cors());
app.use(express.json());

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// berita routes
app.use("/berita", beritaRoutes);

// UMKM Routes
app.use("/UMKM", umkmRoutes);

//upload poto handle
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file sudah di upload");
});

// module.exports = supabase;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
