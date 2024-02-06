import * as dotenv from "dotenv";
dotenv.config();
import { AppDataSource } from "./data-source";
import express from "express";
import { router } from "./routes";
import fs from "node:fs";
import https from "node:https";
import cors from "cors";
const credentials = {
  key: fs.readFileSync("./server.key"),
  cert: fs.readFileSync("./server.cert"),
};

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json({ limit: "10mb" }));
    app.use(cors());
    app.get("/", (req, res) => {
      res.send("Sua aplicação Node.js com CORS habilitado.");
    });
    app.use(router);

    const server = https.createServer(credentials, app);

    server.listen(8080, "0.0.0.0", () =>
      console.log("Server is Running...🗳️🔥")
    );
  })
  .catch((err) => {
    return console.error(`${err.message} 🥺`);
  });
