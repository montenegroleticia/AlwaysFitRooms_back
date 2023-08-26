import * as userService from "../services/users-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function Register(req: Request, res: Response) {
  const { nome, email, senha }: { nome: string; email: string; senha: string } =
    req.body;

  try {
    const user = await userService.CreateUser(nome, email, senha);
    return res.send(user);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function Login(req: Request, res: Response) {
  const { email, senha } = req.body;

  try {
    const user = await userService.login(email, senha);
    return res.send(user);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function Logout(req: Request, res: Response) {
  const { email } = req.body;

  try {
    const user = await userService.logout(email);
    return res.send(user);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
