const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/Infini");
  const mobileSchema = new mongoose.Schema({
    name: String,
  });

  const mobileModel = mongoose.model("products", mobileSchema);
  let data = new mobileModel({ name: "vivo y10" });
  let reult = await data.save();
  console.log(reult);
};
main()