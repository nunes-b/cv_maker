import express, { Express } from "express";
import { userRoutes } from "./user.routes";

const routes: Express = express();

routes.use(userRoutes);

export default routes;
