const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtManager = require("../../../managers/jwtManager");


const signup = async (req, res) => {
  const adminUserModel = mongoose.model("users");

  const { email, password, confirm_password, name } = req.body;

  // validations...

  if (!email) throw "Email must be provided!";
  if (!password) throw "Password must be provided!";
  if (password.length < 5) throw "Password must be at least 5 characters long.";

  if (!name) throw "Name is required";
  if (password !== confirm_password)
    throw "Password and confirmed password doesnot match!";

  const getDuplicateEmail = await adminUserModel.findOne({
    email: email,
  });

  if (getDuplicateEmail) throw "This email already exists!";

  const hashedPassword = await bcrypt.hash(password, 12);

  const createdUser = await adminUserModel.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  const token = jwtManager(createdUser);


  res.status(200).json({
    status: "success",
    message: "User registered successfully!",
    data: {
      token: token,
    },
  });
};

module.exports = signup;
