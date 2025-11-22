const mongoose = require("mongoose");
const validator = require("validator");

const addViewCount = async (req, res) => {
  const videoModel = mongoose.model("videos");

  const { videoid } = req.body;
  if (!validator.isMongoId(videoid.toString()))
    throw "Please provide a valid video ID!";

  const videoData = await videoModel.findOne({ _id: videoid });
  if (!videoData) throw "Video not found!";

  const updatedVideo = await videoModel.findByIdAndUpdate(
    videoid,
    { $inc: { viewers: 1 } }, // <-- viewers = viewers + 1
    { new: true } // return updated document
  );

  res.status(200).json({
    status: "success",
    message: "View count updated successfully!",
    data: {
      video_id: videoid,
      new_view_count: updatedVideo.viewers,
    },
  });
};

module.exports = addViewCount;
