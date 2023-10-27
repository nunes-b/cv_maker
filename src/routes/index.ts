import { Router } from "express";
import { UserController } from "../controller/user/addUser.controller";

const userController = new UserController();
const routes = Router();

routes.post("/user", async (req, res) => {
  await userController.createUser(req, res);
});

export default routes;
