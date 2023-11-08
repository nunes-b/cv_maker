import { createQualificacaoController } from "../controller/qualificacao/addQualificacao.controller";
import { Request, Response, Router } from "express";

const router = Router();

router.post("/qualificacao", async (req: Request, res: Response) => {
  await createQualificacaoController(req, res);
});

export { router as qualificacaoRoutes };
