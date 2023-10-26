import { Router } from "express";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use(userRoutes);

export default routes;
