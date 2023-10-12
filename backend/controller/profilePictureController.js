const { ProfilePictureModel } = require("../model/profilePictureModel");

const uploadProfilePicture = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Check if an image with the same name exists
  ProfilePictureModel.findOne({ userId: req.userId }, (err, existingImage) => {
    if (err) {
      return res.status(500).send("Error checking for existing image.");
    }

    if (existingImage) {
      // Update the existing image
      existingImage.content = req.file.buffer;
      existingImage.save((saveErr) => {
        if (saveErr) {
          return res.status(500).send("Error updating image.");
        }
        return res.send("Image updated.");
      });
    } else {
      // Create a new image
      const newImage = new ProfilePictureModel({
        content: req.file.buffer,
        contentType: req.file.mimetype,
        userId: req.userId,
      });
      newImage.save((saveErr) => {
        if (saveErr) {
          return res.status(500).send("Error saving new image.");
        }
        return res.send("Image uploaded.");
      });
    }
  });
};

module.exports = { uploadProfilePicture };
