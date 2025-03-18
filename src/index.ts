require("tsconfig-paths/register");
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { checkDBConnection } from "database";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4269;
app.use(express.json());
app.use(cookieParser());
checkDBConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
