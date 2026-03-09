import Mustache from "mustache";
import fs from "fs/promises";

test("Function", async () => {
  const parameter = {
    name: "Elham",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      };
    },
  };

  const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
  expect(data).toBe("Hello ELHAM");
});
