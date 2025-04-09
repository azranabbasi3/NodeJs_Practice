const express = require("express");
const dbconnect = require("./moongodb");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

app.post("/", async (req, res) => {
  let data = await dbconnect();
  let result = await data.insertMany(req.body);
  res.send(result);
});

app.delete("/", async (req, res) => {
  let data = await dbconnect();
  let result = await data.deleteOne({
    price: req.body.price,
    name: req.body.name,
  });
  res.send(result);
});

app.put("/", async (req, res) => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );
  res.send(result);
});

app.put("/:name", async (req, res) => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(result);
});

app.listen(4000, () => {
  console.log("server start");
});
