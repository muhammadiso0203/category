import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
import { config } from "../config/config.js";

export const authMiddleware = async (req, res, next) => {
    try {
    const token = req.headers.authorization.split   (" ")[1];
    const decode = jwt.verify(token, config.jwt_secret);
    console.log(decode);
    const user = await User.findById(decode.sub);
    if (!user) {
        return next(new Error("Authentication failed", 400));   
        }
        req.user = user;
        next();
        } catch (error) {
        next(error);    
    }
};



