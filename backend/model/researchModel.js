const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const researchSchema = new Schema({
  content: {
    type: Buffer, // Use the Buffer type to store binary data
    required: true,
  },
  contentType: {
    type: String, // Store the content type (e.g., 'application/pdf')
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
});

const ResearchModel = mongoose.model("Research", researchSchema);
const ResearchSchema = researchSchema;

module.exports = { ResearchModel, ResearchSchema };
