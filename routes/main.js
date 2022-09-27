const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const instanceController = require("../controllers/instance");
const tasksController = require("../controllers/tasks");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, homeController.getTaskForDropdown);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// Timer routes
router.get("/timer", instanceController.postTimer);
router.post("/timer", instanceController.postTimer);

// Task routes
router.get("/taskupdate", ensureAuth, tasksController.getTasks);
router.post("/taskupdate", ensureAuth, tasksController.createTask);
router.delete("/deleteTask/:id", tasksController.deleteTasks);

module.exports = router;
