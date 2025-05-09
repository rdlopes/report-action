import * as core from "@actions/core";

export async function createSummary(title: string) {
  const summary = core.summary
    .addHeading(title)
    .addCodeBlock(`
import * as core from "@actions/core";
import { createSummary } from "./create-summary";

try {
  const title = core.getInput("title");
  core.debug(\`title: ${title}\`);
  const report = createSummary(title);
  core.setOutput("report", report);
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed(JSON.stringify(error));
  }
}
`, "js")
    .addTable([
      [{ data: "File", header: true }, { data: "Result", header: true }],
      ["foo.js", "Pass ✅"],
      ["bar.js", "Fail ❌"],
      ["test.js", "Pass ✅"]
    ])
    .addLink("View staging deployment!", "https://github.com");
  const contents = summary.stringify();
  await summary.write();
  return contents;
}
