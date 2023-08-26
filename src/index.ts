import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/health", (req: Request, res: Response) => {
  res.send("I'm alive");
});

const port = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve is alive and running on port ${port}`);
});
