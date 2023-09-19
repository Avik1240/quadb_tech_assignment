const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fetchData = require("./api/data/info");
const updateData = require("./api/data/updateInfo");
const getData = require('./api/routes/getData')
mongoose
  .connect(
    "mongodb://localhost:27017/quadb"
  )
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cors())


fetchData();
updateData();

app.use('/api/data',getData);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    success: false,
    error: error.message,
  });
});

module.exports = app;