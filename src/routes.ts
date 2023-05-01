import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { LoginController } from "./controller/LoginController";
import { RefleshTokenController } from "./controller/RefleshTokenController";
import { NewPromotionController } from "./controller/NewPromotionController";
import { Image } from "./controller/image";

export const router = Router();

router.post("/createuser", new CreateUserController().create);
router.post("/login", new LoginController().handler);
router.post("/refleshtoken", new RefleshTokenController().refleshToken);
router.post("/newpromotion", new NewPromotionController().handler);
router.post("/image", new Image().handler);
