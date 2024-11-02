const express = require("express");
const router = express.Router();
const beritaController = require("../controller/beritaController");

router.get("/", beritaController.getAllBerita);
router.get("/:id", beritaController.getBeritaById);
router.post("/create", beritaController.createBerita);
router.put("/:id", beritaController.updateBerita);
router.delete("/:id", beritaController.deleteBerita);

module.exports = router;
