import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyparser from "body-parser";
import routes from "./routes";
import { limiter } from "./utils/limiter";

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.middlewares();
    this.home();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(limiter);
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: false }));
  }

  private home(): void {
    this.app.get("/", (req, res) => {
      res.status(200).send({
        title: "CV_MAKER",
        version: "0.0.1",
      });
    });
  }

  private routes(): void {
    this.app.use(routes);
  }
}

export default new App().app;
