import express from "express";
import { userController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
    .get("/", authMiddleware, userController.getAllUser)
    .get("/:id", authMiddleware, userController.getOneUser)
    .put("/:id", userController.update)
    .delete("/:id", userController.delete)
    .post("/", authMiddleware, userController.create)


export { router as userRouter };