import * as core from "@actions/core";
import * as github from "@actions/github";
import { createSummary } from "./create-summary";

async function run() {
  try {
    const githubToken = core.getInput("GITHUB_TOKEN", { required: true });
    const title = core.getInput("title", { required: true });
    core.debug(`title: ${title}`);
    const report = await createSummary(title);
    core.setOutput("report", report);

    const pullRequestNumber = github.context.payload?.pull_request?.number || 0;
    if (pullRequestNumber >= 1) {
      const octokit = github.getOctokit(githubToken);
      await octokit.rest.issues.createComment({
        ...github.context.repo,
        issue_number: pullRequestNumber,
        body: report
      });
    }

  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run().then(() => core.debug("[DONE]"));
