const { ResearchModel } = require("../model/researchModel");
const { ResearchPdfModel } = require("../model/researchPdfModel");
const { User } = require("../model/userModel");
const { sort } = require("../utils/sorting");
const {
  filterArchive,
  filterResearch,
  filterSubmit,
  filterRecords,
  filterCount,
} = require("../utils/filtering");

const getUserResearches = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).json(user.research);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const uploadResearch = async (req, res) => {
  console.log(req.body);
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
      department: research.department,
      course: research.course,
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

// ADMIN ACCESS
const getSubmittedResearches = async (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const pageSize = 5;

  try {
    const skipCount = (pageNumber - 1) * pageSize;
    const newSubmit = await ResearchModel.find(filterSubmit(req.query.filter))
      .skip(skipCount)
      .limit(pageSize);
    res.status(200).json(newSubmit);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSubmittedResearchesCount = async (req, res) => {
  try {
    const count = await ResearchModel.countDocuments(
      filterCount(req.query.filter)
    );
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const confirmation = async (req, res) => {
  try {
    const research = await ResearchModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!research) throw Error("No research found");
    res.status(200).json(research);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const reject = async (req, res) => {
  try {
    await ResearchModel.findByIdAndDelete(req.params.id);
    await ResearchPdfModel.findOneAndDelete({ researchDetails: req.params.id });
    res.status(200).json({message: "Deleted Successfully"});
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const queue = async (req, res) => {
  try {
    const queue = await ResearchModel.find({ queue: true, approve: false });
    res.status(200).json(queue);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllRecords = async (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  console.log(req.query.sort);

  try {
    const skipCount = (pageNumber - 1) * pageSize;
    const arvhices = await ResearchModel.find(filterRecords(req.query.filter))
      .skip(skipCount)
      .limit(pageSize)
      .sort(sort(req.query.sort));
    res.send(arvhices);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateRecords = async (req, res) => {
  console.log(req.body, req.file);

  try {
    const newResearch = await ResearchModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    );

    if (req?.file?.buffer) {
      await ResearchPdfModel.updateOne(
        { researchDetails: req.params.id },
        {
          $set: {
            content: req.file.buffer,
          },
        }
      );
    }

    res.status(201).json(newResearch);
  } catch (err) {
    console.log("error");
    res.status(500).json({ error: "fucked up" });
  }
};

const pushToArchives = async (req, res) => {
  try {
    const research = await ResearchModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(201).json(research);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteArchive = async (req, res) => {
  const archiveId = req.params.id;
  try {
    const archive = await ResearchModel.findByIdAndDelete({ _id: archiveId });
    await ResearchPdfModel.findOneAndDelete({ researchDetails: archiveId });
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
  getSubmittedResearches,
  confirmation,
  reject,
  getAllRecords,
  updateRecords,
  deleteArchive,
  pushToArchives,
  getSubmittedResearchesCount,
  queue,
};
