import { createQualificacaoController } from "../controller/qualificacao/addQualificacao.controller";
import { listQualificacao } from "../controller/qualificacao/listQualificacao.controller";
import { Request, Response, Router } from "express";
import { updateDescriptionQualificacao } from "../controller/qualificacao/updateQualificacaoDescription.controller";
import { listQualificacaoById } from "../controller/qualificacao/listQualificacaoById.controller";
import { deleteQualificacaoController } from "../controller/qualificacao/deleteQualificacao.controller";

const router = Router();

router.post("/qualificacao", async (req: Request, res: Response) => {
  await createQualificacaoController(req, res);
});

router.get("/qualificacao", async (req: Request, res: Response) => {
  await listQualificacao(req, res);
});

router.get("/qualificacao/:id", async (req: Request, res: Response) => {
  await listQualificacaoById(req, res);
});

router.put("/qualificacao/:id", async (req: Request, res: Response) => {
  await updateDescriptionQualificacao(req, res);
});

router.delete("/qualificacao/:id", async (req: Request, res: Response) => {
  await deleteQualificacaoController(req, res);
});

export { router as qualificacaoRoutes };
