import analyze from "./analyze";

const obj = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

test("Analyze given numbers", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual(obj);
});
