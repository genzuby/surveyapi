const mongoose = require("mongoose");
const Answer = require("../../models/Answer");
const fakeInfo = require("./surveytestinfo");

// test db uri
const MONGO_URI = "mongodb://localhost:27017/surveytest";

describe("Answer mongoose test", () => {
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
    expect(Answer).toBeDefined();
  });

  describe("Insert survey answer", () => {
    it("Should add passed information", async () => {
      expect.assertions(1);

      // Delete test data before insert
      await Answer.deleteOne({});

      // Insert fake information from fakeInfo
      const answer = new Answer(fakeInfo);
      const answerRes = await answer.save();
      const expectedInfo = "test3333@gmail.com";
      const savedInfo = answerRes.userId;
      expect(savedInfo).toEqual(expectedInfo);
    });
  });

  describe("Get data from answers", () => {
    it("Should have a item by userinfo", async () => {
      expect.assertions(1);
      const answer = await Answer.find({ userId: "test3333@gmail.com" });
      expect(answer.length).toBe(1);
    });

    it("Should have a item by userinfo and suerveyId", async () => {
      expect.assertions(1);
      const answer = await Answer.find({
        userId: "test3333@gmail.com",
        answeredlist: {
          $elemMatch: { surveyID: "345f52c7-78f6-4cc4-9f8a-0490744f7da3" }
        }
      });
      expect(answer.length).toBe(1);
    });
  });
});
