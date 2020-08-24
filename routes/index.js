const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes.js");

// API Routes
router.use(apiRoutes);


// // If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require('../config/middleware/isAuthenticated');

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
