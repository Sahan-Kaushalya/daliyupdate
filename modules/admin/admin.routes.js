const express = require("express");
const signup = require("./controllers/signup");
const login = require("./controllers/login");
const auth = require("../../middleware/auth");
const addVideo = require("./controllers/addVideo");

const adminUserRoutes = express.Router();

// Routes...

 adminUserRoutes.post("/login",login);

 adminUserRoutes.use(auth); // Middleware to protect routes can be added here

// protected route
adminUserRoutes.post("/addnewvideo", addVideo);

module.exports = adminUserRoutes;
