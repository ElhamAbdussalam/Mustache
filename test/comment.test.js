import Mustache from "mustache";
import fs from "fs/promises";

test("Comment", async () => {
  const helloTemplate = await fs
    .readFile("./template/comment.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, { title: "Elham" });

  console.info(data);
  expect(data).toContain("Elham");
  expect(data).not.toContain("Ini komentar");
});
