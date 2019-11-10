const express = require("express");
const router = express.Router();
const Survey = require("../models/Survey");

// Router information for Restful request
// Send every data from this collection.
router.get("/", async (req, res) => {
  try {
    const survey = await Survey.find();
    res.json(survey);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
