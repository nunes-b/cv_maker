import express, { Express } from "express";
import { userRoutes } from "./user.routes";
import swagerRoute from "../swagger/swagger";
import { CurriculoRoutes } from "./curriculo.routes";

const routes: Express = express();

routes.use(swagerRoute);
routes.use(userRoutes);
routes.use(CurriculoRoutes);

export default routes;
