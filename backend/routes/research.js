const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const {
  uploadResearch,
  getByDepartment,
  getResearch,
  getArchives,
  getArchive,
  getPdf,
  getUserResearches,
} = require("../controller/researchController");

const requireAuth = require("../middleware/requireAuth");
router.get("/pdf/:id", getPdf);

router.use(requireAuth);
router.get("/archives", getArchives);
router.get("/archives/:id", getArchive);
router.get("/user/:id", getUserResearches);
router.get("/:id", getByDepartment);
router.get("/:id/:id", getResearch);
router.post("/upload", upload.single("pdf"), uploadResearch);

module.exports = router;
