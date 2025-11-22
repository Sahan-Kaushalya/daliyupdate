const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Password is required!"],
  },

},{
  timestamps:true,
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;