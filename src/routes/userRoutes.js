import { Router } from "express";
import userController from "../controllers/userController";

const router = new Router();

router.get("/", homeController.store);

export default router;
