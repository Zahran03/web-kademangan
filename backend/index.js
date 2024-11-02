const express = require("express");
const app = express();
const port = 3000;
// const client = require("./db/conn");
const env = require("dotenv");

env.config();

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.DATABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/berita", async (_, response) => {
  try {
    let { data: berita, error } = await supabase.from("berita").select("*");
    console.log(berita);
    return response.send(berita);
  } catch (error) {
    return response.send({ error });
  }
});

// app.get("/berita", async (req, res) => {
//   const result = await client.query("SELECT * from berita");
//   res.json({ data: result.rows[0] });
// });

// app.post("/berita", async (req, res) => {
//   const result = await client.query(
//     "INSERT INTO berita (judul, gambar, deskripsi) VALUES ($1,$2,$3)",
//     [req.body.judul, req.body.gambar, req.body.deskripsi]
//   );
//   res.json({ message: "Added new berita", desc: result.rowCount });
// });

// app.post("/gambarBerita", upload.single("file"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   res.json(req.file);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
