const express = require("express");
const router = express.Router();
const Answer = require("../models/Answer");

// get answered Information by userid
router.get("/:userId", async (req, res) => {
  try {
    const answer = await Answer.find({ userId: req.params.userId });
    res.json(answer);
  } catch (err) {
    res.json({ message: err });
  }
});

// get answered Information by userid and survayid
router.get("/:userId/:surveyId", async (req, res) => {
  try {
    const answer = await Answer.find({
      userId: req.params.userId,
      answeredlist: { $elemMatch: { surveyID: req.params.surveyId } }
    });
    res.json(answer);
  } catch (err) {
    res.json({ message: err });
  }
});

//Initial save answer
router.post("/", async (req, res) => {
  const answer = new Answer({
    userId: req.body.userId,
    userInfo: {
      under18: req.body.userInfo.under18,
      finished: req.body.userInfo.finished
    },
    answeredlist: [
      {
        surveyID: req.body.answeredlist[0].surveyID,
        surveyItems: req.body.answeredlist[0].surveyItems
      }
    ]
  });

  try {
    const answerRes = await answer.save();
    res.json(answerRes);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
