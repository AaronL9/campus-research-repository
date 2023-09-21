require("dotenv").config();
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const transporter = require("../utils/nodemailerConfig");

// generate token for signup and login
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const {name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Generate a reset token and send the password reset email
const recoverPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Email not found" });
    }

    // Generate a unique reset token and set an expiration time
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

    await user.save();

    // Send the password reset email with a link containing the reset token
    const resetLink = `http://${req.headers.host}/api/user/reset_password/${resetToken}`;

    // Define email content
    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Password Reset Request",
      text:
        `You are receiving this because you (or someone else) requested a password reset for your account.\n\n` +
        `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
        `${resetLink}\n\n` +
        `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    // Use nodemailer to send the email
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending password reset email:", error);
        res
          .status(500)
          .json({ error: "An error occurred while sending the email" });
      } else {
        console.log("Password reset email sent successfully");
        res
          .status(200)
          .json({ message: "Password reset email sent successfully" });
      }
    });

    res.status(200).json({ message: "Password reset email sent successfully" });
  } catch (error) {
    console.error("Password reset error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Update the user's password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    user.password = hash;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Password reset error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
};


// Change password for the logged-in user
const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user._id;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Verify the old password
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Incorrect old password" });
    }

    // Hash and update the new password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    user.password = hash;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Change password error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
};

module.exports = {
  signupUser,
  loginUser,
  recoverPassword,
  resetPassword,
  changePassword,
};
