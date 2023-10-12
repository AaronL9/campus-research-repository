const express = require("express");
const router = express.Router();

// controller function
const {
  uploadProfilePicture,
} = require("../controller/profilePictureController");

const {
  signupUser,
  loginUser,
  recoverPassword,
  resetPassword,
  changePassword,
  setBio
} = require("../controller/userController");
const requireAuth = require("../middleware/requireAuth");

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// forgot password route
router.post("/forgot_password", recoverPassword);
router.post("/reset_password/:token", resetPassword);

// change password
router.use(requireAuth);
router.post('/upload/profile', uploadProfilePicture)
router.patch('/bio/:id', setBio);
router.post("/change_password", changePassword);

module.exports = router;
