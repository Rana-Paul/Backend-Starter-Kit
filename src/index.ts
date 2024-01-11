import express, { Express } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// example route
app.use("/api/user", userRouter);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});