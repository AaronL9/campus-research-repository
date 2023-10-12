const mongoose = require("mongoose");
const { User } = require("../model/userModel");

const Schema = mongoose.Schema;

const profilePictureSchema = new Schema({
  content: {
    type: Buffer, // Use the Buffer type to store binary data
    required: false,
  },
  contentType: {
    type: String, // Store the content type (e.g., 'application/pdf')
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const ProfilePictureModel = mongoose.model("ProfilePicture", profilePictureSchema);

module.exports = { ProfilePictureModel };
