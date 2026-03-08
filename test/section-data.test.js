import Mustache from "mustache";
import fs from "fs/promises";

test("Sections Data", async () => {
  const helloTemplate = await fs
    .readFile("./template/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Elham",
    },
  });

  console.info(data);
  expect(data).toContain("Hello Person Elham!");
});
