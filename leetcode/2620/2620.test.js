const createCounter = require("./2620");

describe("2620. Counter", () => {
  test("Positive integer", () => {
    const input = 10;
    const counter = createCounter(input);

    const expectedFirstCall = 11;
    const expectedSecondCall = 12;
    const expectedThirdCall = 13;

    expect(counter()).toEqual(expectedFirstCall);
    expect(counter()).toEqual(expectedSecondCall);
    expect(counter()).toEqual(expectedThirdCall);
  });

  test("Negative integer", () => {
    const input = -2;
    const counter = createCounter(input);

    const expectedFirstCall = -1;
    const expectedSecondCall = 0;
    const expectedThirdCall = 1;

    expect(counter()).toEqual(expectedFirstCall);
    expect(counter()).toEqual(expectedSecondCall);
    expect(counter()).toEqual(expectedThirdCall);
  });
});
