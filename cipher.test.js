import ceaserCipher from "./cipher";

test("Cipher one lowercase char", () => {
  expect(ceaserCipher("a", 3)).toBe("d");
});

test("Cipher one uppercase char", () => {
  expect(ceaserCipher("A", 3)).toBe("D");
});

test("Convert multi-char words", () => {
  expect(ceaserCipher("eren", 5)).toBe("jwjs");
});

test("Convert mult-char words, case insensitive", () => {
  expect(ceaserCipher("eReN", 5)).toBe("jWjS");
});

test("Wrap z to a when converting words", () => {
  expect(ceaserCipher("eren", 20)).toBe("ylyh");
});

test("Not convert non alphabetical chars", () => {
  expect(ceaserCipher("eren123!", 25)).toBe("dqdm123!");
});
