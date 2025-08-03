const createHelloWorld = require("./2667");

describe("2667. Create Hello World Function", () => {
  test("Always return Hello World", () => {
    const expected = "Hello World";
    expect(createHelloWorld()()).toEqual(expected);
  });
});
