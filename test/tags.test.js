import Mustache from "mustache";

test("Tags", () => {
  const data = Mustache.render("Hello, {{name}}, my hobby is {{{hobby}}}", {
    name: "Elham",
    hobby: "<b>Programming</b>",
  });
  expect(data).toBe("Hello, Elham, my hobby is <b>Programming</b>");
});

test("Nested Object", () => {
  const data = Mustache.render("Hello, {{ person.name }}", {
    person: {
      name: "Elham",
    },
  });
  expect(data).toBe("Hello, Elham");
});
