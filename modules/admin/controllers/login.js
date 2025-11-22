const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtManager = require("../../../managers/jwtManager");


const login = async (req, res) => {
  const adminUserModel = mongoose.model("users");

  const { email, password } = req.body;

  const getUser = await adminUserModel.findOne({
    email: email,
  });

  if (!getUser) throw "This email doesnot exist in the system!";

  const comparePassword = await bcrypt.compare(password, getUser.password);

  if (!comparePassword) throw "Email and password do not match!";

  const token = jwtManager(getUser);

  // success response

  res.status(200).json({
    status: "success",
    message: "User logged in successfully!",
    data: {
      token: token,
    },
  });
};

module.exports = login;
