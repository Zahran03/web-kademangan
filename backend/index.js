const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
// const env = require("dotenv");
const beritaRoutes = require("./routes/beritaRoutes");
const umkmRoutes = require("./routes/umkmRoutes");

app.use(cors());
app.use(express.json());

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}.${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });
// app.get("/", (req, res) => {
//   console.log("test");
//   res.send("Hello from our server!");
// });
// berita routes
app.use("/berita", beritaRoutes);

// UMKM Routes
app.use("/UMKM", umkmRoutes);
// app.post("/gambarBerita", upload.single("file"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   res.json(req.file);
// });

// module.exports = supabase;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
