const dbconnect = require("./moongodb");

const update = async () => {
  const db = await dbconnect();
  const reult=await db.updateMany(
    { name:"iphone"},
    {$set:{name:'vivo',price:10000}});
    console.log(reult)
};
update();