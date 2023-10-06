const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const researchSchema = new Schema({
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
  archiveStatus: {
    type: Boolean,
    default: false,
    required: false,
  },
  approve: {
    type: Boolean,
    default: false,
  },
  queue: {
    type: Boolean,
    default: false,
  }
});

const ResearchModel = mongoose.model("Research", researchSchema);
const ResearchSchema = researchSchema;

module.exports = { ResearchModel, ResearchSchema };
