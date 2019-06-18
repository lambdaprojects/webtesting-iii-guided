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

  describe("should invoke call back using the number provided if on even", () => {
    it("invoke call back", () => {
      const spy = jest.fn();

      helpers.forEvenOnly(2, spy);
      helpers.forEvenOnly(4, spy);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, 2);
      expect(spy).toHaveBeenNthCalledWith(2, 4);
    });

    it("should not invoke call back if odd number", () => {
      const spy = jest.fn();

      helpers.forEvenOnly(1, spy);
      helpers.forEvenOnly(2, spy);
      helpers.forEvenOnly(3, spy);
      helpers.forEvenOnly(4, spy);

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, 2);
      expect(spy).toHaveBeenNthCalledWith(2, 4);
    });
  });
});
