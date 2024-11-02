const supabase = require("../supabaseClient");

const getAllUmkm = async (req, res) => {
  try {
    const { data: umkm, error } = await supabase.from("UMKM").select();
    return res.send(umkm);
  } catch (error) {
    return res.send({ error });
  }
};

const getUmkmById = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("UMKM")
      .select()
      .eq("id", req.params.id);

    return res.send(data);
  } catch (error) {
    return res.send({ error });
  }
};

const createUmkm = async (req, res) => {
  try {
    const { data, error } = await supabase.from("UMKM").insert(req.body);
    if (error) {
      return res.status(400).json(error);
    }
    res.status(200).json(req.body);
  } catch (error) {
    res.send({ error });
  }
};

const updateUmkm = async (req, res) => {
  try {
    const { data: existingData, error: existingError } = await supabase
      .from("UMKM")
      .select("*")
      .eq("id", req.params.id)
      .single();

    if (existingError) throw existingError;

    // Lakukan update data
    const { data: updatedData, error: updatedError } = await supabase
      .from("UMKM")
      .update({
        nama_umkm: req.body.nama_umkm
          ? req.body.nama_umkm
          : existingData.nama_umkm,
        kategori: req.body.kategori ? req.body.kategori : existingData.kategori,
        deskripsi: req.body.deskripsi
          ? req.body.deskripsi
          : existingData.deskripsi,
        gambar: req.body.gambar ? req.body.gambar : existingData.gambar,
      })
      .eq("id", req.params.id);

    if (updatedError) throw updatedError;
    const { data, err } = await supabase.from("UMKM").select();
    return res.status(200).send(data);
  } catch (error) {
    res.send({ error });
  }
};

const deleteUmkm = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("UMKM")
      .delete()
      .eq("id", req.params.id);
    const { datar, errorr } = await supabase.from("UMKM").select();
    if (error) {
      return res.status(400).json(error);
    }
    return res.send(datar);
  } catch (error) {
    res.send({ error });
  }
};

module.exports = {
  getAllUmkm,
  getUmkmById,
  createUmkm,
  updateUmkm,
  deleteUmkm,
};
