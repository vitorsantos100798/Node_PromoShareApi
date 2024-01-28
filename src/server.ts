import { AppDataSource } from "./data-source";
import express from "express";
import { router } from "./routes";

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json({ limit: "10mb" }));

    app.use(router);

    app.listen(8080, () => console.log("Server is Running...🗳️🔥"));
  })
  .catch((err) => {
    return console.error(`${err.message} 🥺`);
  });
