import dotenv from "dotenv";
import app from "./app";
import { connectDatabase } from "./controllers/database.controller";

dotenv.config();

connectDatabase();

app.listen(3000);
console.log(`Server on port ${3000}`);
