import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const swagerRoute = express.Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cv Maker API",
      version: "1.0.0",
      description: "",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["../routes/*.ts"],
};

const specs = swaggerJsdoc(options);
swagerRoute.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default swagerRoute;
