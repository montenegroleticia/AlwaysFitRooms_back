import { Router } from "express";
import * as roomsController from "../controllers/rooms-controller";

const roomsRouter = Router();

roomsRouter.get("/rooms", roomsController.getRooms);
roomsRouter.get("/rooms/:id", roomsController.getRoomsById);
roomsRouter.delete("/rooms/:id", roomsController.deleteRooms);

export default roomsRouter;
