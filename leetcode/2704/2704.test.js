const expectValue = require("./2704");

describe("2704. To Be Or Not To Be", () => {
  test("Equal number", () => {
    const expected = true;
    expect(expectValue(5).toBe(5)).toEqual(expected);
  });

  test("InEqual", () => {
    const expected = true;
    expect(expectValue(5).notToBe(null)).toEqual(expected);
  });
});
