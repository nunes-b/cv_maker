import { Request, Response, Router } from "express";
import { createIdiomaController } from "../controller/idioma/createIdioma.controller";

const router = Router();

router.post("/idioma", async (req: Request, res: Response) => {
  await createIdiomaController(req, res);
});

export { router as idiomasRoutes };
