import { Request, Response, Router } from "express";
import { createExpController } from "../controller/experiencias/addExp.controller";
const router = Router();

router.post("/curso", async (req: Request, res: Response) => {
  await createExpController(req, res);
});

export { router as expRoutes };
