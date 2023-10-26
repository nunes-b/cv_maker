import { Router } from "express";
import { userRoutes } from "./user.routes"; // Importe as rotas do usuário

const routes = Router();

routes.use(userRoutes);

export default routes;
