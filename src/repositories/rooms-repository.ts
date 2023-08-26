import connection from "../database";

export async function getRooms() {
  const result = await connection.query(`SELECT * FROM Rooms`);
  return result.rows;
}

export async function getRoomsById(id: number) {
  const result = await connection.query(`SELECT * FROM Rooms WHERE id=$1`, [
    id,
  ]);
  return result.rows;
}

export async function deleteRooms(id: number) {
  return await connection.query(`DELETE FROM Rooms WHERE id = $1`, [id]);
}
