import * as core from "@actions/core";

try {
  const title = core.getInput("title");
  core.debug(`title: ${title}`);
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed(JSON.stringify(error));
  }
}
