const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const ComputersController = require("./computers.controller");

router.get("/", AuthMiddleware, ComputersController.getAllComputers);
router.delete("/", AuthMiddleware, ComputersController.deleteComputer);
router.post("/", AuthMiddleware, ComputersController.addNewComputer);
router.get("/:id/soft", AuthMiddleware, ComputersController.getComputerSoft);
router.delete("/:computer_id/soft", AuthMiddleware, ComputersController.removeSoftFromComputer);

module.exports = router;
