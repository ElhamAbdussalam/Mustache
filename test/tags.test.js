import Mustache from "mustache";
import fs from "fs/promises";

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

test("Mustache File", async () => {
  const helloTemplate = await fs
    .readFile("./template/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, { title: "Elham" });

  console.info(data);
  expect(data).toContain("Elham");
});
