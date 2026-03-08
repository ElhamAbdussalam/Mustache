import Mustache from "mustache";
import fs from "fs/promises";

test("List", async () => {
  const helloTemplate = await fs
    .readFile("./template/list.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    hobbies: ["Coding", "Gaming", "Reading"],
  });

  console.info(data);
  expect(data).toContain("Coding");
});

test("List Object", async () => {
  const helloTemplate = await fs
    .readFile("./template/list.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    students: [
      { name: "Elham", value: 100 },
      { name: "Budi", value: 100 },
    ],
  });

  console.info(data);
  expect(data).toContain("Elham");
});
