import Mustache from "mustache";
import fs from "fs/promises";

test("Partials", async () => {
  const contentTemplate = await fs
    .readFile("./template/content.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(contentTemplate, {
    title: "Belajar Partials",
    content: "Muhammad Elham Abdussalam",
  });

  console.info(data);
  expect(data).toContain("Belajar Partials");
  expect(data).toContain("Muhammad Elham Abdussalam");
});
