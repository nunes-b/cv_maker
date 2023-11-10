import express, { Express } from "express";
import swagerRoute from "../swagger/swagger";
import { userRoutes } from "./user.routes";
import { CurriculoRoutes } from "./curriculo.routes";
import { qualificacaoRoutes } from "./qualificacao.routes";
import { CursoRoutes } from "./curso.routes";

const routes: Express = express();

routes.use(swagerRoute);
routes.use(userRoutes);
routes.use(CurriculoRoutes);
routes.use(qualificacaoRoutes);
routes.use(CursoRoutes);

export default routes;
