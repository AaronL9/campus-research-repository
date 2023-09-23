const express = require("express");

const router = express.Router();

// controller function
const {
  signupUser,
  loginUser,
  recoverPassword,
  resetPassword,
  changePassword,
  signupWithGoogle
} = require("../controller/userController");

const requireAuth = require('../middleware/requireAuth');

// login route
router.post("/login", loginUser);

// signup route
router.get('/auth/google', signupWithGoogle)
router.post("/signup", signupUser);

// forgot password route
router.post("/forgot_password", recoverPassword);
router.post("/reset_password/:token", resetPassword)

// change password
router.use(requireAuth);
router.post("/change_password", changePassword);


module.exports = router;
