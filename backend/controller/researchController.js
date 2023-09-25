const { ResearchModel } = require("../model/researchModel");

const uploadResearch = async (req, res) => {
  try {
    const research = await ResearchModel.create({
      content: req.file.buffer, // Store the binary data of the file
      contentType: req.file.mimetype, // Store the content type (e.g., 'application/pdf')
      ...req.body
    });

    console.log(req.body);  
    res.status(201).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  uploadResearch,
};