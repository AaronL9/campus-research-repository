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
  getAllResearch,
  getSubmittedResearches,
  confirmation,
  reject,
} = require("../controller/researchController");

const requireAuth = require("../middleware/requireAuth");
router.get("/pdf/:id", getPdf);

router.use(requireAuth);
router.get("/submitted", getSubmittedResearches);
router.get("/archives", getArchives);
router.get("/researches", getAllResearch);
router.get("/archives/:id", getArchive);
router.get("/user/:id", getUserResearches);
router.get("/department/:id", getByDepartment);
router.get("/:id", getResearch);

router.patch("/approve/:id", confirmation);

router.post("/upload", upload.single("pdf"), uploadResearch);

router.delete("/reject/:id", reject);

module.exports = router;
