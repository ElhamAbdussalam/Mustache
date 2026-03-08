import Mustache from "mustache";
import fs from "fs/promises";

test("List", async () => {
  const helloTemplate = await fs
    .readFile("./template/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    hobbies: ["Coding", "Gaming", "Reading"],
  });

  console.info(data);
  expect(data).toContain("Coding");
});
