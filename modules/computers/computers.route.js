const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const ComputersController = require("./computers.controller");

router.get("/", AuthMiddleware, ComputersController.getAllComputers);

module.exports = router;
