const express = require("express");
const router = express.Router();
const heroSectionController = require("../controller/heroController");

router.get("/", heroSectionController.getAllHero);
router.post("/create", heroSectionController.createHeroSection);

module.exports = router;
