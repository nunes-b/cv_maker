import { Request, Response, Router } from "express";
import { createCursoController } from "../controller/curso/addCurso.controller";
import { listCursoController } from "../controller/curso/listCursos.controller";
const router = Router();

router.post("/curso", async (req: Request, res: Response) => {
  await createCursoController(req, res);
});
router.get("/curso", async (req: Request, res: Response) => {
  await listCursoController(req, res);
});

export { router as CursoRoutes };
