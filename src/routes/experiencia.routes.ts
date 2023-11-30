import { Request, Response, Router } from "express";
import { createExpController } from "../controller/experiencias/addExp.controller";
import { listExpController } from "../controller/experiencias/listExp.controller";
import { listExpByIdController } from "../controller/experiencias/listExpById.controller";
import { deletedExpController } from "../controller/experiencias/deleteExp.controller";
import { updateCursoController } from "../controller/experiencias/update.controller";
const router = Router();

router.post("/experiencia", async (req: Request, res: Response) => {
  await createExpController(req, res);
});
router.get("/experiencia", async (req: Request, res: Response) => {
  await listExpController(req, res);
});
router.get("/experiencia/:id", async (req: Request, res: Response) => {
  await listExpByIdController(req, res);
});
router.delete("/experiencia/:id", async (req: Request, res: Response) => {
  await deletedExpController(req, res);
});
router.put("/experiencia/:id", async (req: Request, res: Response) => {
  await updateCursoController(req, res);
});

export { router as expRoutes };
