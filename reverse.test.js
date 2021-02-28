import reverse from "./reverse";

test("Reverse one word string", () => {
  expect(reverse("Eren")).toBe("nerE");
});

test("Reverse multi word string", () => {
  expect(reverse("Eren Çataltepe")).toBe("epetlataÇ nerE");
});

test("Reverse empty string", () => {
  expect(reverse("")).toBe("");
});
