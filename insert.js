const dbconnect = require("./moongodb");

const insert = async () => {
  const db = await dbconnect();
  const reult = await db.insertMany([
    {
      name: "vivo",
      price: 52000,
      color: "orange",
    },
    {
      name: "Q-mobile",
      price: 5100,
      color: "orange",
    },
  ]);
  if (reult.acknowledged) {
    console.log("Data inerted");
  }
};
insert();
