const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const ComputersController = require("./computers.controller");

router.get("/", AuthMiddleware, ComputersController.getAllComputers);
router.delete("/", AuthMiddleware, ComputersController.deleteComputer);
router.post("/", AuthMiddleware, ComputersController.addNewComputer);

module.exports = router;
