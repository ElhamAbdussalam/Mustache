import Mustache from "mustache";
import fs from "fs/promises";

test("Inverted Sections", async () => {
  const helloTemplate = await fs
    .readFile("./template/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});

  console.info(data);
  expect(data).toContain("Hello Guest");
});
