const express = require("express");
const router = express.Router();
const beritaController = require("../controller/beritaController");

router.get("/", beritaController.getAllBerita);
router.get("/:id", beritaController.getBeritaById);
router.get("/create", beritaController.createBerita);
router.get("/:id", beritaController.updateBerita);
router.get("/:id", beritaController.deleteBerita);

module.exports = router;
