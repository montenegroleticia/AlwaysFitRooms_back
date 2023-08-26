import Joi from "joi";

export const UserSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(3).required(),
});
