import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { LoginController } from "./controller/LoginController";
import { RefleshTokenController } from "./controller/RefleshTokenController";
import { NewPromotionController } from "./controller/NewPromotionController";
import { GetPromotionController } from "./controller/GetPromotionController";
import { GetCitiesController } from "./controller/GetCities";
import { GetCuponsController } from "./controller/GetCupons";
import { ProfileImageController } from "./controller/ProfileImageController";
import { GetInfoUserController } from "./controller/getInfoUserController";

export const router = Router();

router.post("/createuser", new CreateUserController().create);
router.post("/login", new LoginController().handler);
router.post("/refleshtoken", new RefleshTokenController().refleshToken);
router.post("/newpromotion", new NewPromotionController().handler);
router.get("/getpromotion", new GetPromotionController().execute);
router.post("/profileImage", new ProfileImageController().handler);
router.get("/getcities", new GetCitiesController().execute);
router.get("/getcupons", new GetCuponsController().execute);
router.get("/getinfouser", new GetInfoUserController().execute);
router.get("/", (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "Request successful." });
});
