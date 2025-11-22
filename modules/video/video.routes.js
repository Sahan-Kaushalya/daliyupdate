const express = require("express");
const auth = require("../../middleware/auth");
const getvideoData = require("./controllers/getVData");
const addViewCount = require("./controllers/addView");

const videoRoutes = express.Router();

// Routes...

videoRoutes.get("/:video_ID",getvideoData);
videoRoutes.post("/addcount",addViewCount);

module.exports = videoRoutes;
