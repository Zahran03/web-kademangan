const express = require("express");
const router = express.Router();
const umkmController = require("../controller/umkmController");

router.get("/", umkmController.getAllUmkm);
router.get("/:id", umkmController.getUmkmById);
router.post("/create", umkmController.createUmkm);
router.put("/:id", umkmController.updateUmkm);
router.delete("/:id", umkmController.deleteUmkm);

module.exports = router;
