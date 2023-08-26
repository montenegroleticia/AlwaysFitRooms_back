import * as usersRepository from "../repositories/users-repository";

export async function CreateUser(nome: string, email: string, senha: string) {
  const findUser = await usersRepository.getUser(email);
  if (findUser === null) {
    return await usersRepository.createUsers(nome, email, senha);
  }
}

export async function login(email: string, senha: string) {
  return await usersRepository.login(email, senha);
}

export async function logout(email: string) {
  return await usersRepository.logout(email);
}
