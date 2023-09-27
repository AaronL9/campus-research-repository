const { ResearchModel } = require("../model/researchModel");

const uploadResearch = async (req, res) => {
  try {
    const research = await ResearchModel.create({
      content: req.file.buffer, // Store the binary data of the file
      contentType: req.file.mimetype, // Store the content type (e.g., 'application/pdf')
      ...req.body,
    });

    console.log(req.body);
    res.status(201).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getByDepartment = async (req, res) => {
  const deptId = req.params.id;

  try {
    const researches = await ResearchModel.find({
      department: deptId,
      archiveStatus: false,
    });
    console.log(deptId);
    res.status(201).send(researches);
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
      content: research.content.toString("base64"),
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getArchives = async (req, res) => {
  try {
    const arvhices = await ResearchModel.find({ archiveStatus: true });
    res.send(arvhices);
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
};
