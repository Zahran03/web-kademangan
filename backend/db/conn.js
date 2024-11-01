const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "zahranmansiz032022",
  host: "localhost",
  port: 5432,
  database: "kademangandb",
});

async function check() {
  await client.connect();
  // const res = await client.query("SELECT * from berita");
  // console.log(res.rows); // Hello world!
  // await client.end();
}
check();
module.exports = client;
