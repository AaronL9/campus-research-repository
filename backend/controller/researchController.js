const { ResearchModel } = require("../model/researchModel");
const { ResearchPdfModel } = require("../model/researchPdfModel");
const User = require("../model/userModel");
const { sort } = require("../utils/sorting");
const { filterArchive, filterResearch } = require("../utils/filtering");

const getUserResearches = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).json(user.research);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

const uploadResearch = async (req, res) => {
  console.log(req.userId);
  try {
    const newResearch = await ResearchModel.create({ ...req.body });

    await User.findByIdAndUpdate(
      req.userId,
      { $push: { research: newResearch } },
      { new: true }
    );

    await ResearchPdfModel.create({
      content: req.file.buffer, // Store the binary data of the file
      contentType: req.file.mimetype, // Store the content type (e.g., 'application/pdf')
      researchDetails: newResearch._id,
    });

    res.status(201).json(newResearch);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getByDepartment = async (req, res) => {
  const deptId = req.params.id;
  const pageNumber = parseInt(req.query.page) || 1;
  const pageSize = 5;

  console.log(deptId, req.query.filter);

  try {
    const skipCount = (pageNumber - 1) * pageSize;
    const researches = await ResearchModel.find(
      filterResearch(req.query.filter, deptId)
    )
      .skip(skipCount)
      .limit(pageSize);

    res.send(researches);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getPdf = async (req, res) => {
  const researchId = req.params.id;

  try {
    const pdf = await ResearchPdfModel.findOne({ researchDetails: researchId });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'inline; filename="Upang_Research.pdf"'
    );

    res.send(pdf.content);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getResearch = async (req, res) => {
  const researchId = req.params.id;

  try {
    const research = await ResearchModel.findById({ _id: researchId });
    if (!research) {
      return res.status(404).send("Research not found");
    }

    res.json({
      title: research.title,
      author: research.author,
      year: research.year,
      abstract: research.abstract,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getArchives = async (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  console.log(req.query.sort);
  try {
    const skipCount = (pageNumber - 1) * pageSize;
    const arvhices = await ResearchModel.find(filterArchive(req.query.filter))
      .skip(skipCount)
      .limit(pageSize)
      .sort(sort(req.query.sort));
    res.send(arvhices);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllResearch = async (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;
  try {
    const skipCount = (pageNumber - 1) * pageSize;
    const researches = await ResearchModel.find({ archiveStatus: false })
      .skip(skipCount)
      .limit(pageSize)
      .sort(sort(req.query.sort));
    res.send(researches);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getArchive = async (req, res) => {
  const archiveId = req.params.id;
  try {
    const archive = await ResearchModel.findById({ _id: archiveId });
    res.send(archive);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  uploadResearch,
  getByDepartment,
  getResearch,
  getArchives,
  getArchive,
  getPdf,
  getUserResearches,
  getAllResearch,
};
