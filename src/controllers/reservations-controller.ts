import { Request, Response } from "express";
import * as reservationService from "../services/reservations-service";
import { CreateReservations, Reservations } from "../protocols";
import httpStatus from "http-status";

export async function createReservations(req: Request, res: Response) {
  const reservations = req.body as CreateReservations;
  try {
    await reservationService.CreateReservations(reservations);

    res.status(httpStatus.CREATED).send("reservations created");
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getReservations(req: Request, res: Response) {
  try {
    const reservations =
      (await reservationService.getReservations()) as Reservations[];

    res.status(httpStatus.OK).send(reservations);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getReservationsById(req: Request, res: Response) {
  const id: number = parseInt(req.params.id, 10);

  try {
    const reservations = await reservationService.getReservationsById(id);

    res.status(httpStatus.OK).send(reservations);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function putReservations(req: Request, res: Response) {
  const reservationsId: number = parseInt(req.params.id, 10);
  const updatedreservations = req.body as Reservations;

  try {
    await reservationService.putReservations(
      reservationsId,
      updatedreservations
    );

    res.status(httpStatus.OK).send("Updated reservations");
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function deleteReservations(req: Request, res: Response) {
  const reservationsId: number = parseInt(req.params.id, 10);

  try {
    await reservationService.deleteReservations(reservationsId);

    res.status(httpStatus.NO_CONTENT).send("Deleted reservations");
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
