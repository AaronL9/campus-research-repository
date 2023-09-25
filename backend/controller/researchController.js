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
    const researches = await ResearchModel.find({ department: deptId });
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

    // Set the appropriate content type for PDF
    res.setHeader("Content-Type", "application/pdf");

    res.send(research.content);
  } catch (error) { 
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  uploadResearch,
  getByDepartment,
  getResearch,
};
