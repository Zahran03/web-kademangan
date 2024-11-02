const express = require("express");
const app = express();
const port = 3000;
// const env = require("dotenv");
const beritaRoutes = require("./routes/beritaRoutes");

app.use(express.json());
// env.config();

// const { createClient } = require("@supabase/supabase-js");

// const supabaseUrl = process.env.DATABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

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

// berita routes
app.use("/berita", beritaRoutes);

// read table berita

//app.get("/berita", async (_, response) => {
// try {
//   const { data: berita, error } = await supabase.from("berita").select();
//   console.log(berita);
//   return response.send(berita);
// } catch (error) {
//   return response.send({ error });
// }
//});

// read 1 data spesifik dari berita
//app.get("/berita/:id", async (request, response) => {
// try {
//   const { data, error } = await supabase
//     .from("berita")
//     .select()
//     .eq("id", request.params.id);
//   console.log(data);
//   return response.send(data);
// } catch (error) {
//   return response.send({ error });
// }
//});

// Post ke table berita

//app.post("/berita", async (request, response) => {
// try {
//   console.log(request.body);
//   const { data, error } = await supabase.from("berita").insert(request.body);
//   if (error) {
//     return response.status(400).json(error);
//   }
//   response.status(200).json(request.body);
// } catch (error) {
//   response.send({ error });
//}
//});

// update data berita

// app.put("/berita/:id", async (request, response) => {
//   console.log(request.params);
//   try {
//     const { data: existingData, error: existingError } = await supabase
//       .from("berita")
//       .select("*")
//       .eq("id", request.params.id)
//       .single();

//     if (existingError) throw existingError;

//     // Lakukan update data
//     const { data: updatedData, error: updatedError } = await supabase
//       .from("berita")
//       .update({
//         judul: request.body.judul ? request.body.judul : existingData.judul,
//         gambar: request.body.gambar ? request.body.gambar : existingData.gambar,
//         deskripsi: request.body.deskripsi
//           ? request.body.deskripsi
//           : existingData.deskripsi,
//       })
//       .eq("id", request.params.id);

//     if (updatedError) throw updatedError;
//     const { data, err } = await supabase.from("berita").select();
//     return response.status(200).send(data);
//   } catch (error) {
//     response.send({ error });
//   }
// });

// delete berita
// app.delete("/berita/:id", async (request, response) => {
//   try {
//     const { data, error } = await supabase
//       .from("berita")
//       .delete()
//       .eq("id", request.params.id);
//     const { datar, errorr } = await supabase.from("berita").select();
//     if (error) {
//       return response.status(400).json(error);
//     }
//     return response.send(datar);
//   } catch (error) {
//     response.send({ error });
//   }
// });

// app.post("/gambarBerita", upload.single("file"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   res.json(req.file);
// });

// module.exports = supabase;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
