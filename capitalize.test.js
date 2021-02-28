import capitalize from "./capitalize";

test("make single lowercase char word capitalize", () => {
  expect(capitalize("a")).toBe("A");
});

test("make single uppercase char capitalize", () => {
  expect(capitalize("A")).toBe("A");
});

test("make all lowercase word capitalize", () => {
  expect(capitalize("eren")).toBe("Eren");
});

test("make all uppercase word capitalize", () => {
  expect(capitalize("EREN")).toBe("Eren");
});

test("make more complex word capitalize", () => {
  expect(capitalize("eREn")).toBe("Eren");
});

test("return empty string as empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Conver multi words correctly", () => {
  expect(capitalize("eRen ÇataltepE")).toBe("Eren çataltepe");
});
