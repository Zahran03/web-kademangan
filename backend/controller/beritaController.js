const pool = require("../conn");

const getAllBerita = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM berita");
    return res.send(result.rows);
  } catch (error) {
    return res.send({ error });
  }
};

const getBeritaById = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM berita WHERE id = $1", [
      req.params.id,
    ]);
    return res.send(result.rows);
  } catch (error) {
    return res.send({ error });
  }
};

const createBerita = async (req, res) => {
  try {
    const { judul, gambar, deskripsi } = req.body;
    const result = await pool.query(
      "INSERT INTO berita (judul, gambar, deskripsi) VALUES ($1, $2, $3) RETURNING *",
      [judul, gambar, deskripsi]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).send({ error });
  }
};

const updateBerita = async (req, res) => {
  try {
    // Ambil data yang ada sebelumnya
    const existingData = await pool.query(
      "SELECT * FROM berita WHERE id = $1",
      [req.params.id]
    );
    if (existingData.rowCount === 0) throw new Error("Data not found");

    const updatedData = await pool.query(
      "UPDATE berita SET judul = $1, gambar = $2, deskripsi = $3 WHERE id = $4 RETURNING *",
      [
        req.body.judul || existingData.rows[0].judul,
        req.body.gambar || existingData.rows[0].gambar,
        req.body.deskripsi || existingData.rows[0].deskripsi,
        req.params.id,
      ]
    );

    const allData = await pool.query("SELECT * FROM berita");
    return res.status(200).send(allData.rows);
  } catch (error) {
    res.send({ error });
  }
};

const deleteBerita = async (req, res) => {
  try {
    await pool.query("DELETE FROM berita WHERE id = $1", [req.params.id]);
    const result = await pool.query("SELECT * FROM berita");
    return res.send(result.rows);
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = {
  getAllBerita,
  getBeritaById,
  createBerita,
  updateBerita,
  deleteBerita,
};
