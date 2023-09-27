const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const {
  uploadResearch,
  getByDepartment,
  getResearch,
  getArchives,
  getArchive,
} = require("../controller/researchController");

const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

router.get("/archives", getArchives);
router.get("/archives/:id", getArchive);
router.post("/upload", upload.single("pdf"), uploadResearch);

router.get("/:id", getByDepartment);
router.get("/:id/:id", getResearch);

module.exports = router;
