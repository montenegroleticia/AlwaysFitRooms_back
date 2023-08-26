import connection from "../database";

export async function createUsers(nome: string, email: string, senha: string) {
  return await connection.query(
    `INSERT INTO Users (nome, email, senha) VALUES ($1, $2, $3)`,
    [nome, email, senha]
  );
}

export async function getUser(email: string) {
  return await connection.query(`SELECT * FROM Users where email = $1`, [
    email,
  ]);
}

export async function login(email: string, senha: string) {
  return await connection.query(
    `INSERT INTO Session (email, senha) VALUES ($1, $2)`,
    [email, senha]
  );
}

export async function logout(email: string) {
  return await connection.query(`DELETE FROM Session WHERE email = $1`, [
    email,
  ]);
}
