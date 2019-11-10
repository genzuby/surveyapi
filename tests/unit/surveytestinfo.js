const testAnswer = {
  userId: "test3333@gmail.com",
  userInfo: {
    under18: false,
    finished: true
  },
  answeredlist: [
    {
      surveyID: "345f52c7-78f6-4cc4-9f8a-0490744f7da3",
      surveyItems: [
        {
          questionID: "question-problems",
          type: "Checkbox",
          choices: ["dental_implants", "unfilled_cavities"]
        }
      ]
    }
  ]
};

module.exports = testAnswer;

// {\"userId\":\"genzu@gmdfg.com\",\"userInfo\":{\"under18\":false,\"finished\":true},\"answeredlist\":[{\"surveyID\":\"345f52c7-78f6-4cc4-9f8a-0490744f7da3\",\"surveyItems\":[{\"questionID\":\"question-problems\",\"type\":\"Checkbox\",\"choices\":[\"unfilled_cavities\",\"retainers\",\"missing_teeth\"]}]}]}
