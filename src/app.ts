import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import bodyparser from "body-parser";

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.middlewares();
    this.home();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(rateLimit());
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
}

export default new App().app;
