const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/newsRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
var multer = require("multer");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

app.unsubscribe(express.urlencoded({ extended: true }));

app.use("/api", routes);

const mongoUrl = "mongodb://127.0.0.1:27017/db";

mongoose.connect(mongoUrl).then(() => {
  console.log("server connected");
  app.listen(3001, () => {
    console.log("server started");
  });
});

module.export = app;
