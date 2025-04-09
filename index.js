//--------------4th day practice---------------------------------------
//----------moongodb--------
// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// const dbName = "Infini";

// async function Getdata() {
//   await client.connect();
//   console.log("DB  connected");
//   const db = client.db(dbName);
//   const collection = db.collection("products");
//   const reult = await collection.find().toArray()
//   console.log(reult);
// }

// Getdata();
//---------Read data from moongodb---------------

const Getdata  = require('./moongodb');

const main = async () => {
  let data = await Getdata();
  let a = await data.find().toArray();
  console.log(a);
};

main();
