const mongoose = require("mongoose");

const SurveySchema = mongoose.Schema({
  surveyID: {
    type: String,
    required: true
  },
  surveyItems: Array
});

// collection name : surveyitems
module.exports = mongoose.model("surveyitem", SurveySchema);
