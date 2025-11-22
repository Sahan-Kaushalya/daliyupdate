const express = require("express");
const cors =require("cors");
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");
const adminUserRoutes = require("./modules/admin/admin.routes");
const videoRoutes = require("./modules/video/video.routes");
require("dotenv").config();

const app = express();
app.use(cors());

// connection to Mongodb...
mongoose
  .connect(process.env.MONGO_DB, {})
  .then(() => {
    console.log("Connection to DB successfully ..............!");
  })
  .catch((err) => {
    console.log("Connection to DB failed .......!");
    console.error(err);
  });

// Models initialization
require("./database/models/users.models");
require("./database/models/videos.models");

///..................

app.use(express.json());

/// Routes......
app.use("/api/admin/users",adminUserRoutes);
app.use("/api/video",videoRoutes);

/// end of all routes......
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`
  });
});


app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server started successfully !");
});
