const mongoose = require("mongoose");
const { ResearchModel } = require("../model/researchModel");

const Schema = mongoose.Schema;

const researchPdfSchema = new Schema({
  content: {
    type: Buffer, // Use the Buffer type to store binary data
    required: false,
  },
  contentType: {
    type: String, // Store the content type (e.g., 'application/pdf')
    required: false,
  },
  researchDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ResearchModel",
  },
});

const ResearchPdfModel = mongoose.model("ResearchPdf", researchPdfSchema);

module.exports = { ResearchPdfModel };
