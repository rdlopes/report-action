import * as core from "@actions/core";
import { createSummary } from "./create-summary";

try {
  const title = core.getInput("title");
  core.debug(`title: ${title}`);
  createSummary(title)
    .then(report => core.setOutput("report", report));
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed(JSON.stringify(error));
  }
}
