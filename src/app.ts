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
    this.routes();
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

  private routes(): void {
    this.express.get("/", (req, res) => {
      return res.send("Hello World");
    });
  }
}

export default new App().express;
