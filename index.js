const express = require("express");
require("./connection");
const productModel = require("./schema");
const app = express();

app.use(express.json());

app.post("/post", async (req, res) => {
  const product = new productModel(req.body);
  await product.save();
  res.send(product);
});

app.get("/", async (req, res) => {
  const product = await productModel.find();
  res.send(product);
});

app.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  await productModel.deleteOne({_id:req.params.id});
  res.json({ message: "deleted" });
});

app.put("/update/:id", async (req, res) => {
  await productModel.updateOne({ _id: req.params.id }, req.body);
  res.json({ message: "updated" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
