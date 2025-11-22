const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
  },

  title_si: {
    type: String,
    required: [true, "Title si is required!"],
  },

  video_link: {
    type: String,
    required: [true, "Video link is required"],
    unique: true,
  },

  ads_link: {
    type: String,
    required: [true, "Ads link is required!"],
  },

  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, "User ID is required!"],
  },

  viewers:{
    type:Number,
    default:0
  }
},{
  timestamps:true,
});

const videosModel = mongoose.model("videos", videoSchema);

module.exports = videosModel;