const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "Infini";

async function dbconnect() {
  await client.connect();
  console.log("DB  connected");
  const db = client.db(dbName);
  return db.collection("products");
}
module.exports = dbconnect;
