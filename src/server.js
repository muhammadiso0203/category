import dotenv from "dotenv";
import {config} from "./config/config.js"
import app from "./app.js";
import {connectionDB} from "./database/db.js"

dotenv.config();

const PORT = config.port || 3030;

const start = () => {
    try {
        connectionDB();
        app.listen(PORT, () => {
            console.log(`Server started on ${PORT}...`);
        });
    } catch (error) {
        console.log("Something went wrong", error);
        process.exit(1);
    }
};

start();