import { Request, Response, Router } from "express";
import { createUserController } from "../controller/user/addUser.controller";

const app = Router();

app.post("/user", (req: Request, res: Response) => {
  createUserController(req, res);
});

export { app as userRoutes };
