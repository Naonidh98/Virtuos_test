const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Dc connection success");
    })
    .catch((err) => {
      console.log("db connection faild", err);
    });
};
