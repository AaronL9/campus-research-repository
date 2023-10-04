const express = require("express");
const router = express.Router();

// controller function
const {
  loginAdmin
} = require("../controller/adminController");
// const requireAuth = require("../middleware/requireAuth");

// login route
router.post("/login", loginAdmin);



// forgot password route
// router.post("/forgot_password", recoverPassword);
// router.post("/reset_password/:token", resetPassword);

// change password
// router.use(requireAuth);
// router.post("/change_password", changePassword);

module.exports = router;
