const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const { dbConnect } = require("./config/Database");
const stdRoute = require("./routes/student");

app.use(express.json());
app.use(cors());

app.use("/api/v1", stdRoute);

app.listen(PORT, () => {
  console.log("Server live : ", PORT);
});

dbConnect();
