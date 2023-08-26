import { Request, Response } from "express";
import * as RoomService from "../services/rooms-service";
import httpStatus from "http-status";

export async function getRooms(req: Request, res: Response) {
  try {
    const Rooms = await RoomService.getRooms();

    res.status(httpStatus.OK).send(Rooms);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getRoomsById(req: Request, res: Response) {
  const id: number = parseInt(req.params.id, 10);

  try {
    const Rooms = await RoomService.getRoomsById(id);

    res.status(httpStatus.OK).send(Rooms);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function deleteRooms(req: Request, res: Response) {
  const RoomsId: number = parseInt(req.params.id, 10);

  try {
    await RoomService.deleteRooms(RoomsId);

    res.status(httpStatus.NO_CONTENT).send("Deleted Rooms");
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
