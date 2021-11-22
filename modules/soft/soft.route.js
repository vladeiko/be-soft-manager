const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const SoftController = require("./soft.controller");

router.get("/", AuthMiddleware, SoftController.getAllSoft);
router.delete("/", AuthMiddleware, SoftController.deleteSoft);
router.post("/", AuthMiddleware, SoftController.addNewSoft);

module.exports = router;
