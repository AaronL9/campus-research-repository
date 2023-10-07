const Admin = require("../model/adminModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// generate token for signup and login
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login user
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.login(email, password);
    const userName = admin.name;
    const isAdmin = admin.isAdmin;
    // create token
    const token = createToken(admin._id);
    
    res.status(200).json({ userName, email, token, isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {loginAdmin}
