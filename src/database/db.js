import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connectionDB = async () => {
    try {
        await mongoose.connect(config.db_url);
        console.log("Database connected");
    } catch (error) {
        console.log("Mongo Connection failed", error);
        process.exit(1);
    }
};