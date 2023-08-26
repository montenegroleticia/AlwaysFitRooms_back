import express, { Request, Response } from "express";
import dotenv from "dotenv";
import reservationsRouter from "../src/routers/reservations-router";
import { usersRouter } from "./routers/users-router";
import cors from "cors";
import roomsRouter from "./routers/rooms-router";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send("I'm alive");
});

app.use(reservationsRouter);
app.use(usersRouter);
app.use(roomsRouter);

const port = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve is alive and running on port ${port}`);
});
