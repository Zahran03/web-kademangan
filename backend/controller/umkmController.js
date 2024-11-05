const pool = require("../conn");

const getAllUmkm = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM umkm");
    return res.send(result.rows);
  } catch (error) {
    return res.send({ error });
  }
};
const getUmkmById = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM umkm WHERE id = $1", [
      req.params.id,
    ]);
    return res.send(result.rows);
  } catch (error) {
    return res.send({ error });
  }
};

const createUmkm = async (req, res) => {
  try {
    const { nama_umkm, kategori, deskripsi, gambar } = req.body;
    const result = await pool.query(
      "INSERT INTO umkm (nama_umkm, kategori, deskripsi, gambar) VALUES ($1, $2, $3, $4)",
      [nama_umkm, kategori, deskripsi, gambar]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).send({ error });
  }
};

const updateUmkm = async (req, res) => {
  try {
    // Ambil data yang ada sebelumnya
    const existingData = await pool.query("SELECT * FROM UMKM WHERE id = $1", [
      req.params.id,
    ]);
    if (existingData.rowCount === 0) throw new Error("Data not found");

    const updatedData = await pool.query(
      "UPDATE UMKM SET nama_umkm = $1, kategori = $2, deskripsi = $3, gambar = $4 WHERE id = $5 RETURNING *",
      [
        req.body.nama_umkm || existingData.rows[0].nama_umkm,
        req.body.kategori || existingData.rows[0].kategori,
        req.body.deskripsi || existingData.rows[0].deskripsi,
        req.body.gambar || existingData.rows[0].gambar,
        req.params.id,
      ]
    );

    const allData = await pool.query("SELECT * FROM UMKM");
    return res.status(200).send(allData.rows);
  } catch (error) {
    res.send({ error });
  }
};

const deleteUmkm = async (req, res) => {
  try {
    await pool.query("DELETE FROM UMKM WHERE id = $1", [req.params.id]);
    const result = await pool.query("SELECT * FROM UMKM");
    return res.send(result.rows);
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = {
  getAllUmkm,
  getUmkmById,
  createUmkm,
  updateUmkm,
  deleteUmkm,
};
