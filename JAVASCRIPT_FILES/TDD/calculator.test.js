const calculator = require("./calculator");

test("addition of 4 and 6 to equal 10", () => {
  expect(calculator.sum(4, 6)).toBe(10);
});

test("subtraction of 6 and 4 to equal 2", () => {
  expect(calculator.diff(6, 4)).toBe(2);
});
