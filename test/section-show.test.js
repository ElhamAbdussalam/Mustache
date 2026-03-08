import Mustache from "mustache";
import fs from "fs/promises";

test("Section Not Show", async () => {
  const helloTemplate = await fs
    .readFile("./template/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});

  console.info(data);
  expect(data).not.toContain("Hello Person");
});

test("Sections Show", async () => {
  const helloTemplate = await fs
    .readFile("./template/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Elham",
    },
  });

  console.info(data);
  expect(data).toContain("Hello Person");
});
