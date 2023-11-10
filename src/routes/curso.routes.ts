import { Request, Response, Router } from "express";
import { createCursoController } from "../controller/curso/addCurso.controller";
import { listCursoController } from "../controller/curso/listCursos.controller";
import { listCursoByIdController } from "../controller/curso/listCursoById.controller";
import { updateCursoController } from "../controller/curso/updateCurso.controller";
import { deleteCursoController } from "../controller/curso/deleteCurso.controller";

const router = Router();

router.post("/curso", async (req: Request, res: Response) => {
  await createCursoController(req, res);
});
router.get("/curso", async (req: Request, res: Response) => {
  await listCursoController(req, res);
});
router.get("/curso/:id", async (req: Request, res: Response) => {
  await listCursoByIdController(req, res);
});
router.put("/curso/:id", async (req: Request, res: Response) => {
  await updateCursoController(req, res);
});
router.delete("/curso/:id", async (req: Request, res: Response) => {
  await deleteCursoController(req, res);
});

export { router as CursoRoutes };
