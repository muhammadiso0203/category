import express from "express";
import { authController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", authController.register)
router.post("/login", authController.login)


export { router as authRouter };