import { Router } from "express";
import * as reservationsController from "../controllers/reservations-controller";
import { validateSchemaMiddleware } from "../Middlewares/validate-middleware";
import { ReservationSchema } from "../Schemas/reservations-schemas";

const reservationsRouter = Router();

reservationsRouter.post(
  "/reservations",
  validateSchemaMiddleware(ReservationSchema),
  reservationsController.createReservations
);
reservationsRouter.get("/reservations", reservationsController.getReservations);
reservationsRouter.get(
  "/reservations/:id",
  reservationsController.getReservationsById
);
reservationsRouter.put(
  "/reservations/:id",
  validateSchemaMiddleware(ReservationSchema),
  reservationsController.putReservations
);
reservationsRouter.delete(
  "/reservations/:id",
  reservationsController.deleteReservations
);

export default reservationsRouter;
