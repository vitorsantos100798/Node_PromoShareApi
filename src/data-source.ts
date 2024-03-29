import "reflect-metadata";
import cfg from "./config/database";
import { DataSource } from "typeorm";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "promoday.crdp02eqbjwi.us-east-1.rds.amazonaws.com",
  port: 5432,
  username: cfg.username,
  password: cfg.password,
  database: cfg.database,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  ssl: {
    rejectUnauthorized: false,
  },
});
