import { createQualificacaoController } from "../controller/qualificacao/addQualificacao.controller";
import { listQualificacao } from "../controller/qualificacao/listQualificacao.controller";
import { Request, Response, Router } from "express";

const router = Router();

router.post("/qualificacao", async (req: Request, res: Response) => {
  await createQualificacaoController(req, res);
});
router.get("/qualificacao", async (req: Request, res: Response) => {
  await listQualificacao(req, res);
});

export { router as qualificacaoRoutes };
