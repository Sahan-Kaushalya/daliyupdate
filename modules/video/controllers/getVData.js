const mongoose = require("mongoose");
const validator = require("validator");

const getvideoData = async (req, res) => {
  const videoModel = mongoose.model("videos");

  const { video_ID } = req.params;

  if (!validator.isMongoId(video_ID.toString()))
    throw "Please provide a valid Link!";

  const getvideoData = await videoModel.findOne({
    _id: video_ID,
  });

  if (!getvideoData) {
    return res
      .status(404)
      .json({ status: "VIDEO NOT FOUND", message: "Video not found" });
  }

    res.status(200).json({
        status: "success",
        data: getvideoData,
    });
};

module.exports = getvideoData;
