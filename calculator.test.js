import calculator from "./calculator";

test("Add to numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Add one negative one positive number", () => {
  expect(calculator.add(1, -1)).toBe(0);
});

test("Add two negative numbers", () => {
  expect(calculator.add(-2, -3)).toBe(-5);
});

test("Add more than two numbers", () => {
  expect(calculator.add(2, 3, 6, 6)).toBe(17);
});

test("Subtract two numbers", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Subtract more then two numbers", () => {
  expect(calculator.subtract(1, 2, 3, 4)).toBe(-8);
});

test("Divide two numbers", () => {
  expect(calculator.divide(2, 1)).toBe(2);
});

test("Divide with negative numbers", () => {
  expect(calculator.divide(-23, -8)).toBe(2.875);
});

test("Divide with zero", () => {
  expect(calculator.divide(-23, 0)).toBe(Infinity);
});

test("Divide zero with a number", () => {
  expect(calculator.divide(0, 21)).toBe(0);
});

test("Divide zero with zero", () => {
  expect(calculator.divide(0, 0)).toBe(NaN);
});

test("Multiply two positive numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Multiply two negative numbers", () => {
  expect(calculator.multiply(-2, -3)).toBe(6);
});

test("Multiply negative number with positive number", () => {
  expect(calculator.multiply(-2, 3)).toBe(-6);
});

test("Multiply non-zero number with zero", () => {
  expect(calculator.multiply(0, 2)).toBe(0);
});

test("Multiply zero with zero", () => {
  expect(calculator.multiply(0, 0)).toBe(0);
});
