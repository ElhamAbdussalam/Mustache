import Mustache from "mustache";

test("Menggunakan mustache", () => {
  const data = Mustache.render(`Hello {{ name }}`, { name: "Elham" });
  expect(data).toBe("Hello Elham");
});

test("Melakukan Compile", () => {
  Mustache.parse("Hello, {{ name }}");
  const data = Mustache.render("Hello, {{ name }}", { name: "Elham" });
  expect(data).toBe("Hello, Elham");
});
