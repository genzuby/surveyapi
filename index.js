const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const surveyRoute = require("./routes/surveys");
const answerRoute = require("./routes/answers");

// allow cross-origin requests
app.use(cors());

// josn parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/surveys", surveyRoute);
app.use("/answers", answerRoute);

// connect mongoose with survey db
mongoose.connect("mongodb://localhost:27017/survey", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

// Listening server
app.listen(4000, () => {
  console.log("now listening fro requests on port 4000");
});
