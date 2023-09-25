const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer');


const { uploadResearch } = require("../controller/researchController");

// const requireAuth = require("../middleware/requireAuth");

// router.use(requireAuth);
router.post("/upload", upload.single("pdf"), uploadResearch);

module.exports = router;

