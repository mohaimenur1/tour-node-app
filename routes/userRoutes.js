const userRouter = require("./../controllers/userController");
const express = require("express");

const router = express.Router();

// router.param(r)

router.route("/").get(userRouter.getAllUsers);
router.route("/:id").get(userRouter.getAllUser);

module.exports = router;
