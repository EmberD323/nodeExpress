const { Router } = require("express");
const indexRouter = Router();
const userController = require("../controllers/userController");

indexRouter.post("/signup", userController.newUserCreate);
indexRouter.post('/login', userController.logIn);

module.exports = indexRouter;
