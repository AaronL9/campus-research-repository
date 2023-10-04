const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { ResearchSchema, ResearchModel } = require("../model/researchModel");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  research: {
    type: [ResearchSchema],
    ref: "ResearchModel",
    default: [],
    required: false,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

//  static signup method
userSchema.statics.signup = async function (name, email, password) {
  // validation
  if (!email || !password || !name) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Email doesn't exist");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

userSchema.static(
  "findOneOrCreate",
  async function findOneorCreate(condition, doc) {
    const one = await this.findOne(condition);

    return one || this.create(doc);
  }
);

module.exports = mongoose.model("User", userSchema);
