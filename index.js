const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/Infini");
};

connectDB();

const mobileSchema = new mongoose.Schema({
  name: String,
  price: Number,
  color: String,
});
const saveInDB = async () => {
  const mobileModel = mongoose.model("products", mobileSchema);
  let data = new mobileModel({ name: "vivo y13", price: 4000, color: "green" });
  let reult = await data.save();
  console.log(reult);
};
// saveInDB();

const updateInDB = async () => {
  const mobileModel = mongoose.model("products", mobileSchema);
  let data = await mobileModel.updateOne(
    { name: "vivo y20" },
    { $set: { price: 3000, name: "vivo y17" } }
  );
  console.log(data);
};
// updateInDB();

const deleteInDB = async () => {
  const mobileModel = mongoose.model("products", mobileSchema);
  let data = await mobileModel.deleteOne({ name: "vivo y17" });
  console.log(data);
};
// deleteInDB();

const findInDB = async () => {
  const mobileModel = mongoose.model("products", mobileSchema);
  let data = await mobileModel.find();
  console.log(data);
};
// findInDB();
