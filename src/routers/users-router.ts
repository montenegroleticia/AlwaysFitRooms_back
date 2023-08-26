import { Router } from "express";
import { validateSchemaMiddleware } from "../Middlewares/validate-middleware";
import { UserSchema } from "../Schemas/users-schemas";
import { Login, Logout, Register } from "../controllers/users-controller";
import loginSchema from "../Schemas/login-schema";

const usersRouter = Router();

usersRouter.post("/", validateSchemaMiddleware(UserSchema), Register);
usersRouter.post("/login", validateSchemaMiddleware(loginSchema), Login);
usersRouter.post("/logout", Logout);

export { usersRouter };
