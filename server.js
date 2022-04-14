const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// connect .env
require("dotenv").config();
const { readdirSync } = require("fs");

//app initialize
const app = express();

// database

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase CONNECTED"))
  .catch((err) => console.log("DataBase CONNECTION ERR", err));

app.use(morgan("dev"));
app.use(express.json());

//routes middlewares
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});