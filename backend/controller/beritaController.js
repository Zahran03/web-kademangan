const supabase = require("../supabaseClient");

const getAllBerita = async (req, res) => {
  try {
    const { data: berita, error } = await supabase.from("berita").select();
    console.log(berita);
    return res.send(berita);
  } catch (error) {
    return res.send({ error });
  }
};

const getBeritaById = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("berita")
      .select()
      .eq("id", req.params.id);
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send({ error });
  }
};

const createBerita = async (req, res) => {
  try {
    console.log(req.body);
    const { data, error } = await supabase.from("berita").insert(req.body);
    if (error) {
      return res.status(400).json(error);
    }
    res.status(200).json(req.body);
  } catch (error) {
    res.send({ error });
  }
};

const updateBerita = async (req, res) => {
  try {
    const { data: existingData, error: existingError } = await supabase
      .from("berita")
      .select("*")
      .eq("id", req.params.id)
      .single();

    if (existingError) throw existingError;

    // Lakukan update data
    const { data: updatedData, error: updatedError } = await supabase
      .from("berita")
      .update({
        judul: req.body.judul ? req.body.judul : existingData.judul,
        gambar: req.body.gambar ? req.body.gambar : existingData.gambar,
        deskripsi: req.body.deskripsi
          ? req.body.deskripsi
          : existingData.deskripsi,
      })
      .eq("id", req.params.id);

    if (updatedError) throw updatedError;
    const { data, err } = await supabase.from("berita").select();
    return res.status(200).send(data);
  } catch (error) {
    res.send({ error });
  }
};

const deleteBerita = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("berita")
      .delete()
      .eq("id", req.params.id);
    const { datar, errorr } = await supabase.from("berita").select();
    if (error) {
      return res.status(400).json(error);
    }
    return res.send(datar);
  } catch (error) {
    res.send({ error });
  }
};

module.exports = {
  getAllBerita,
  getBeritaById,
  createBerita,
  updateBerita,
  deleteBerita,
};
