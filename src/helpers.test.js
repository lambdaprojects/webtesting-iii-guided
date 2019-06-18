const helpers = require("./helpers.js");

// jest.mock("uuid", () => {
//   return () => "1234";
// });

describe("helpers", () => {
  describe("make person", () => {
    it("should create a person", () => {
      const expected = { id: "1234", name: "Frodo Baggins" };

      const actual = helpers.makePerson("Frodo", "Baggins");

      expect(actual).toEqual(expected);
    });
  });
});
