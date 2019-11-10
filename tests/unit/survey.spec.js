const mongoose = require("mongoose");
const Survey = require("../../models/Survey");

const MONGO_URI = "mongodb://localhost:27017/surveytest";
describe("Survey mongoose test", () => {
  // connection DB
  beforeAll(async () => {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  // Disconnect Mongoose
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Shoud have a module", () => {
    expect(Survey).toBeDefined();
  });

  describe("Get Survey Basic data", () => {
    it("Should have a item", async () => {
      expect.assertions(1);
      const survey = await Survey.find();
      expect(survey.length).toBe(1);
    });

    it("Should have a surveyID", async () => {
      expect.assertions(1);
      const survey = await Survey.find();
      expect(survey[0].surveyID).toBeTruthy();
    });
  });
});
