import express, { Express } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";

const app: Express = express();

// example route
app.use("/api/user", userRouter);

export default app;
