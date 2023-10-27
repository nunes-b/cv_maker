import { Request, Response, Router } from "express";
import { AddUserControler } from "../controller/user/addUser.controller";
import { ListUserController } from "../controller/user/listUser.controller";

const router = Router();
const listUserController = new ListUserController();
const addUserControler = new AddUserControler();

router.post("/user", async (req: Request, res: Response) => {
  await addUserControler.createUser(req, res);
});

router.get("/user", async (req: Request, res: Response) => {
  await listUserController.listUser(req, res);
});

export { router as userRoutes };
