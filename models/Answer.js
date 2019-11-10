const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  questionID: String,
  type: String,
  choices: [String]
});

const AnswerSchema = mongoose.Schema({
  userId: String,
  userInfo: {
    under18: Boolean,
    finished: Boolean
  },
  answeredlist: [
    {
      surveyID: String,
      surveyItems: [ItemsSchema]
    }
  ]
});

module.exports = mongoose.model("answer", AnswerSchema);
