import { createCurriculoController } from "../controller/curriculo/addCurriculo.controller";
import { ListCurriculoController } from "../controller/curriculo/listCurriculo.controller";
import { ListCvByIdController } from "../controller/curriculo/listByIdCurriculo.controller";
import { updateCvController } from "../controller/curriculo/updateCurriculo.controller";
import { deleteCVController } from "../controller/curriculo/deleteCurriculo.controller";
import { Request, Response, Router } from "express";

const router = Router();

router.post("/curriculo", async (req: Request, res: Response) => {
  await createCurriculoController(req, res);
});

router.get("/curriculo", async (req: Request, res: Response) => {
  await ListCurriculoController(req, res);
});

router.get("/curriculo/:id", async (req: Request, res: Response) => {
  await ListCvByIdController(req, res);
});

router.put("/curriculo/:id", async (req: Request, res: Response) => {
  await updateCvController(req, res);
});

router.delete("/curriculo/:id", async (req: Request, res: Response) => {
  await deleteCVController(req, res);
});

export { router as CurriculoRoutes };
