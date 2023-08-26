import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const {
    host,
    port,
    user,
    password,
    db,
} = process.env

const connection = new Pool({
  host: host || "localhost",
  port: parseInt(port) || 5432,
  user: user || "postgres",
  password: password,
  database: db || "reservations",
});

export default connection;
