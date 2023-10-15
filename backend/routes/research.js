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
  getAllRecords,
  updateRecords,
  deleteArchive,
  pushToArchives,
  getSubmittedResearchesCount,
  queue,
  pushToQueue,
} = require("../controller/researchController");

const requireAuth = require("../middleware/requireAuth");
router.get("/pdf/:id", getPdf);

router.use(requireAuth);
router.get("/submitted", getSubmittedResearches);
router.get("/submitted/count", getSubmittedResearchesCount);
router.get("/archives", getArchives);
router.get("/researches", getAllResearch);
router.get("/records", getAllRecords);
router.get("/queue", queue);
router.get("/archives/:id", getArchive);
router.get("/user/:id", getUserResearches);
router.get("/department/:id", getByDepartment);
router.get("/:id", getResearch);

router.patch("/update/:id", upload.single('pdf'), updateRecords);
router.patch("/approve/:id", confirmation);
router.patch("/records/:id", pushToArchives);
router.patch("/queue/:id", pushToQueue);

router.post("/upload", upload.single("pdf"), uploadResearch);

router.delete("/reject/:id", reject);
router.delete("/archives/:id", deleteArchive);

module.exports = router;