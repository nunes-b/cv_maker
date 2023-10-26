import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(rateLimit());
  }

  private routes(): void {
    this.express.get("/", (req, res) => {
      return res.send("Hello World");
    });
  }
}

export default new App().express;
