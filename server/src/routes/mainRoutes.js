const express = require("express");
const authintacitaionRoutes = require("./authintacitaionRoutes");
const userRoutes = require("./userRoutes");
const clintApplicationRoutes = require("./clientDataRoutes");
const queryRoutes = require("./queryRoutes");
const accessRoute = require("./accessRoute");
const taskRoute = require("./taskRoute");
const router = express.Router();

// Use modularized route files
router.use("/auth", authintacitaionRoutes);
router.use("/user", userRoutes);
router.use("/client", clintApplicationRoutes);
router.use("/query", queryRoutes);
router.use("/access", accessRoute);
router.use("/taskRoute", taskRoute);
module.exports = router;
