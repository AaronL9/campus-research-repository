const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer');


const { uploadResearch, getByDepartment, getResearch } = require("../controller/researchController");

// const requireAuth = require("../middleware/requireAuth");

// router.use(requireAuth);

router.get('/:id', getByDepartment);
router.get('/:id/:id', getResearch);
router.post("/upload", upload.single("pdf"), uploadResearch);

module.exports = router;
