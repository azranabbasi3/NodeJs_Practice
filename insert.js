const dbconnect = require("./moongodb");

const insert = async () => {
  const db = await dbconnect();
  const reult = await db.insertMany([
    {
      name: "tecno",
      price: 5000,
      color: "blue",
    },
    {
      name: "Q-mobile",
      price: 5900,
      color: "voilet",
    },
  ]);
  if (reult.acknowledged) {
    console.log("Data inerted");
  }
};
insert();
