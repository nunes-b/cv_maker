import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import bodyparser from "body-parser";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.home();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(rateLimit());
    this.express.use(bodyparser.json());
    this.express.use(bodyparser.urlencoded({ extended: false }));
  }

  private home(): void {
    this.express.get("/", (req, res) => {
      res.status(200).send({
        title: "CV_MAKER",
        version: "0.0.1",
      });
    });
  }
}

export default new App().express;
