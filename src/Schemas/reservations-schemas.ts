import Joi from "joi";
import { CreateReservations } from "protocols";

export const ReservationSchema = Joi.object<CreateReservations>({
  id_usuario: Joi.number().integer().required(),
  id_sala: Joi.number().integer().required(),
  data_hora_inicio: Joi.date().iso().required(),
  data_hora_fim: Joi.date().iso().required(),
  status: Joi.string().valid("ativo", "cancelado").required(),
});
