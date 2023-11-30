import { Request, Response, Router } from "express";
import { createIdiomaController } from "../controller/idioma/createIdioma.controller";
import { listIdiomasController } from "../controller/idioma/listIdiomas.controller";
import { listIdiomasByIdController } from "../controller/idioma/listIdiomasById.controller";
import { updateIdiomaController } from "../controller/idioma/updateIdioma.controller";
import { deleteIdiomaController } from "../controller/idioma/deleteIdioma.controller";

const router = Router();

router.post("/idioma", async (req: Request, res: Response) => {
  await createIdiomaController(req, res);
});
router.get("/idioma", async (req: Request, res: Response) => {
  await listIdiomasController(req, res);
});
router.get("/idioma/:id", async (req: Request, res: Response) => {
  await listIdiomasByIdController(req, res);
});
router.put("/idioma/:id", async (req: Request, res: Response) => {
  await updateIdiomaController(req, res);
});
router.delete("/idioma/:id", async (req: Request, res: Response) => {
  await deleteIdiomaController(req, res);
});

export { router as idiomasRoutes };
