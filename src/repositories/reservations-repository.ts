import { CreateReservations, Reservations } from "protocols";
import connection from "../database";

export async function createReservations(Reservations: CreateReservations) {
  return await connection.query<CreateReservations>(
    `INSERT INTO Reservations (id_usuario, id_sala, data_hora_inicio, data_hora_fim, status) VALUES ($1, $2, $3, $4, $5)`,
    [
      Reservations.id_usuario,
      Reservations.id_sala,
      Reservations.data_hora_inicio,
      Reservations.data_hora_fim,
      Reservations.status,
    ]
  );
}

export async function getReservations() {
  const result = await connection.query(`SELECT * FROM Reservations`);
  return result.rows;
}

export async function getReservationsById(id: number) {
  const result = await connection.query(
    `SELECT * FROM Reservations WHERE id=$1`,
    [id]
  );
  return result.rows;
}

export async function putReservations(Reservations: Reservations) {
  return await connection.query<Reservations>(
    `UPDATE Reservations SET id_usuario=$1, id_sala=$2, data_hora_inicio=$3, data_hora_fim=$4, status=$5 WHERE id = $6`,
    [
      Reservations.id_usuario,
      Reservations.id_sala,
      Reservations.data_hora_inicio,
      Reservations.data_hora_fim,
      Reservations.status,
      Reservations.id,
    ]
  );
}

export async function deleteReservations(id: number) {
  return await connection.query(`DELETE FROM Reservations WHERE id = $1`, [id]);
}
