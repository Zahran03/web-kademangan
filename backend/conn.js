const env = require("dotenv");
env.config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: process.env.POSTGRESQL_PASS,
  host: "localhost",
  port: 5432, // default Postgres port
  database: "kademangandb",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
