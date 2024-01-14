import app from ".";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;

process.on("uncaughtException", (err: Error) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

process.on("unhandledRejection", (err: Error) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");

  server.close(() => {
    process.exit(1);
  });
});
