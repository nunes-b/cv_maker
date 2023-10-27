import express, { Express } from "express";
import { userRoutes } from "./user.routes";
import swagerRoute from "../swagger/swagger";

const routes: Express = express();

routes.use(swagerRoute);
routes.use(userRoutes);

export default routes;
