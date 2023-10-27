import { Request, Response, Router } from "express";
import { UserController } from "../controller/user/addUser.controller";

const app = Router();
const userController = new UserController();

app.post("/user", async (req: Request, res: Response) => {
  await userController.createUser(req, res);
});

export { app as userRoutes };
