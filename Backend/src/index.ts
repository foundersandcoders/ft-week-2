// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import objectRoutes from "./routes/objectRoutes";
import cors from "cors";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/", objectRoutes)


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});