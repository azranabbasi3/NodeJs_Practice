const dbconnect = require("./moongodb");

const dlete = async () => {
  const db = await dbconnect();
  const reult = db.deleteOne({name:"vivo"})
};
dlete()