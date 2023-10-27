import { Request, Response, Router } from "express";
import { AddUserControler } from "../controller/user/addUser.controller";
import { ListUserController } from "../controller/user/listUser.controller";
import { FindUserByIdController } from "../controller/user/listUserById.controller";
import { UpdateUserController } from "../controller/user/updateUserById.controller";
import { DeleteUserController } from "../controller/user/deleteUser.controller";
const router = Router();
const deleteUser = new DeleteUserController();
const userToUpdate = new UpdateUserController();
const findUserByIdController = new FindUserByIdController();
const listUserController = new ListUserController();
const addUserControler = new AddUserControler();

router.post("/user", async (req: Request, res: Response) => {
  await addUserControler.createUser(req, res);
});

router.get("/user", async (req: Request, res: Response) => {
  await listUserController.listUser(req, res);
});

router.get("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await findUserByIdController.listUser(id, req, res);
});

router.put("/user/:id", async (req: Request, res: Response) => {
  await userToUpdate.updateUser(req, res);
});

router.delete("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteUser.DeleteUser(id, req, res);
});

export { router as userRoutes };
